import { handleRequest } from 'decap-cms-oauth-github';

export async function GET({ request }) {
  return handleRequest(request);
}
