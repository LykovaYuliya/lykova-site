export default function handler(req, res) {
  res.writeHead(302, {
    Location: "https://decapcms-oauth.deno.dev/auth/github?client_id=Ov23lisdzdmHbcCzxbhI&redirect_uri=https://lykova-site.vercel.app/admin/"
  });
  res.end();
}
