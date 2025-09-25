import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { opponent, limit, increment, player } = await req.json();

    const token =
      player === '1' ? process.env.LICHESS_TOKEN1 : process.env.LICHESS_TOKEN2;

    if (!token) {
      return NextResponse.json(
        { error: 'Token no configurado' },
        { status: 500 }
      );
    }

    const res = await fetch(`https://lichess.org/api/challenge/${opponent}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rated: false,
        color: player === '1' ? 'white' : 'black',
        time: { limit, increment },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: 'No se pudo crear el challenge', details: data },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Error interno', details: err.message },
      { status: 500 }
    );
  }
}
