import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { opponent, limit, increment } = await req.json();
    const token = process.env.LICHESS_TOKEN!;

    const res = await fetch(`https://lichess.org/api/challenge/${opponent}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rated: false,
        color: 'white',
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
