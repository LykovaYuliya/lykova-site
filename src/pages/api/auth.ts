import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect }) => {
  const clientId = import.meta.env.GITHUB_CLIENT_ID;
  const redirectUri = "https://lykova-site.vercel.app/api/callback";
  const scope = "repo,user";

  return redirect(
    `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`
  );
};
