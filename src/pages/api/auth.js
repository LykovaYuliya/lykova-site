// src/pages/api/auth.js
import { handleRequest } from 'decap-cms-oauth-github';

export async function GET(request) {
  return handleRequest(request);
}

export async function POST(request) {
  return handleRequest(request);
}
