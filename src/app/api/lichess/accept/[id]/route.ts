import { NextResponse } from 'next/server';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { player } = await req.json();

    const token =
      player === '1' ? process.env.LICHESS_TOKEN1 : process.env.LICHESS_TOKEN2;

    if (!token) {
      return NextResponse.json(
        { error: 'Token de Lichess no configurado' },
        { status: 500 }
      );
    }

    const res = await fetch(`https://lichess.org/api/challenge/${id}/accept`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log('Lichess accept response', data);

    if (!res.ok || !data.id) {
      return NextResponse.json(
        { error: 'Error aceptando challenge', raw: data },
        { status: res.status }
      );
    }

    return NextResponse.json({
      gameId: data.id,
      url: data.url,
      status: data.status,
    });
  } catch (err) {
    console.error('Error en accept:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', raw: String(err) },
      { status: 500 }
    );
  }
}
