import { ChessBoard } from '@/components/chess/chess-board';
import { GameSidebar } from '@/components/chess/game-sidebar';
import { GameHeader } from '@/components/chess/game-header';

export default function PlayPage({
  params,
}: {
  params: { id: string; player: '1' | '2' };
}) {
  const { id, player } = params;

  return (
    <div className="container mx-auto px-4 py-6">
      <GameHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="lg:col-span-3">
          <ChessBoard gameId={id} player={player} />
        </div>
        <div className="lg:col-span-1">
          <GameSidebar />
        </div>
      </div>
    </div>
  );
}
