import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { searchParams } = new URL(req.url);
  const player = searchParams.get('player');

  const token =
    player === '2' ? process.env.LICHESS_TOKEN2! : process.env.LICHESS_TOKEN1!;

  const res = await fetch(`https://lichess.org/api/board/game/stream/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }

  return new Response(res.body, {
    headers: { 'Content-Type': 'application/x-ndjson' },
  });
}
