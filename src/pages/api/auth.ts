import type { APIRoute } from 'astro';
import { AuthorizationCode } from 'simple-oauth2';

const client = new AuthorizationCode({
  client: {
    id: import.meta.env.GITHUB_CLIENT_ID,
    secret: import.meta.env.GITHUB_CLIENT_SECRET,
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
});

export const get: APIRoute = async ({ request }) => {
  const authorizationUri = client.authorizeURL({
    redirect_uri: `${import.meta.env.OAUTH_REDIRECT_URI}`,
    scope: 'repo',
  });
  return new Response(null, {
    status: 302,
    headers: { Location: authorizationUri },
  });
};
