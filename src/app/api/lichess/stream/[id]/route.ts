export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    `https://lichess.org/api/board/game/stream/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.LICHESS_TOKEN!}`,
      },
    }
  );

  if (!res.body) {
    return new Response('No body', { status: 500 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const reader = res.body!.getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        controller.enqueue(value);
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
