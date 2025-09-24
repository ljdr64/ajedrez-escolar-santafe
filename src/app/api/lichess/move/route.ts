import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { gameId, move, playerColor } = await req.json();

  const token =
    playerColor === 'white'
      ? process.env.LICHESS_TOKEN1!
      : process.env.LICHESS_TOKEN2!;

  const res = await fetch(
    `https://lichess.org/api/board/game/${gameId}/move/${move}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const text = await res.text();

  if (!res.ok) {
    return NextResponse.json({ error: text }, { status: res.status });
  }

  return NextResponse.json(JSON.parse(text));
}
