import { NextResponse } from 'next/server';
import Ably from 'ably';

export async function GET() {
  if (!process.env.ABLY_API_KEY) {
    return NextResponse.json({ error: 'No API key' }, { status: 500 });
  }

  const client = new Ably.Rest({ key: process.env.ABLY_API_KEY });
  const tokenRequest = await client.auth.createTokenRequest({
    clientId: 'your-client-id',
  });

  return NextResponse.json(tokenRequest);
}
