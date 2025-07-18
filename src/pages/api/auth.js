// src/pages/api/auth.js
export async function GET() {
  return Response.redirect(
    "https://decapcms-oauth.deno.dev/auth/github?client_id=Ov23lisdzdmHbcCzxbhI&redirect_uri=https://lykova-site.vercel.app/admin/",
    302
  );
}
