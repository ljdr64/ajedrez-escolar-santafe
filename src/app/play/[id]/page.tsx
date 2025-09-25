'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { ChessBoard } from '@/components/chess/chess-board';
import { GameHeader } from '@/components/chess/game-header';
import { GameSidebar } from '@/components/chess/game-sidebar';

export default function PlayPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id as string;
  const user = (searchParams.get('user') as '1' | '2') ?? '1';

  return (
    <div className="container mx-auto px-4 py-6">
      <GameHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="lg:col-span-3">
          <ChessBoard gameId={id} player={user} />
        </div>
        <div className="lg:col-span-1">
          <GameSidebar />
        </div>
      </div>
    </div>
  );
}
