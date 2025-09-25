import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  options: { params: Promise<{ id: string }> }
) {
  const { id } = await options.params;
  const gameId = id;

  const user = req.nextUrl.searchParams.get('user') ?? '1';
  const token =
    user === '1' ? process.env.LICHESS_TOKEN1! : process.env.LICHESS_TOKEN2!;

  const lichessRes = await fetch(
    `https://lichess.org/api/board/game/stream/${gameId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!lichessRes.body) {
    return new Response('No stream body', { status: 500 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const reader = lichessRes.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        chunk
          .split('\n')
          .filter((line) => line.trim())
          .forEach((line) => {
            try {
              const obj = JSON.parse(line);
              controller.enqueue(
                new TextEncoder().encode(`data: ${JSON.stringify(obj)}\n\n`)
              );
            } catch (err) {
              console.error('Parse error:', err, line);
            }
          });
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
