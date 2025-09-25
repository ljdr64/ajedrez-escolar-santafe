import { NextResponse } from 'next/server';

export async function POST(
  req: Request,
  options: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await options.params;
    const { move, user } = await req.json();

    const token =
      user === '1' ? process.env.LICHESS_TOKEN1 : process.env.LICHESS_TOKEN2;

    if (!token) {
      return NextResponse.json(
        { error: 'Token de Lichess no configurado' },
        { status: 500 }
      );
    }

    const res = await fetch(
      `https://lichess.org/api/board/game/${id}/move/${move}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error('move error', err);
    return NextResponse.json(
      { error: err.message || 'Error enviando movimiento' },
      { status: 500 }
    );
  }
}
