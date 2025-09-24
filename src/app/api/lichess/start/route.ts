import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { opponent, limit, increment, color, rated } = await req.json();

    const token = process.env.LICHESS_TOKEN1!;

    const res = await fetch(`https://lichess.org/api/challenge/${opponent}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        opponent,
        rated: rated ?? false,
        color: color ?? 'random', // "white" | "black" | "random"
        clock: {
          limit: limit ?? 300,
          increment: increment ?? 0,
        },
        variant: 'standard',
      }),
    });

    const data = await res.json();

    if (!data.challenge?.id) {
      return NextResponse.json(
        { error: 'Challenge no creado', raw: data },
        { status: 400 }
      );
    }

    return NextResponse.json({
      challengeId: data.challenge.id,
      url: data.challenge.url,
    });
  } catch (err) {
    console.error('Error en challenge:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
