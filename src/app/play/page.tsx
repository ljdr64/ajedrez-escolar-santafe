import Board from '@/features/game/Board';

export default function PlayPage() {
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Jugar Ajedrez</h1>
      <div className="flex justify-center">
        <Board />
      </div>
    </section>
  );
}
