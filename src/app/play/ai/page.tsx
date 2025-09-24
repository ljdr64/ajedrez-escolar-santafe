import { ChessBoardAI } from '@/components/chess/chess-board-ai';
import { GameSidebar } from '@/components/chess/game-sidebar';
import { GameHeader } from '@/components/chess/game-header';

export default function PlayVsAIPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <GameHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="lg:col-span-3">
          <ChessBoardAI playerColor={'white'} />
        </div>
        <div className="lg:col-span-1">
          <GameSidebar />
        </div>
      </div>
    </div>
  );
}
