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
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) return new Response('Missing code', { status: 400 });

  try {
    const accessToken = await client.getToken({
      code,
      redirect_uri: `${import.meta.env.OAUTH_REDIRECT_URI}`,
    });
    return new Response(JSON.stringify(accessToken.token), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response('OAuth error', { status: 500 });
  }
};
