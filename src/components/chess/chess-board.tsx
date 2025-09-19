'use client';

import { useEffect, useRef, useState } from 'react';
import { Chessground } from 'chessground';
import { Key } from 'chessground/types';
import { Chess, Move, Square } from 'chess.js';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Flag } from 'lucide-react';
import { PromotionChoice } from './promotion-choice';

import '@/styles/vendor/chessground/assets/chessground.base.css';
import '@/styles/vendor/chessground/assets/chessground.brown.css';
import '@/styles/vendor/chessground/assets/chessground.cburnett.css';
import '@/styles/promotion.css';

type PendingPromotion = {
  from: string;
  to: string;
  color: 'w' | 'b';
};

const buildDests = (game: Chess): Map<Key, Key[]> => {
  const map = new Map<Key, Key[]>();
  const verbose = game.moves({ verbose: true }) as Move[];

  for (const m of verbose) {
    if (!map.has(m.from)) map.set(m.from, []);
    map.get(m.from)!.push(m.to);
  }

  const turn = game.turn();

  if (turn === 'w' && game.get('e1')?.type === 'k') {
    const e1Moves = map.get('e1') || [];

    if (e1Moves.includes('g1')) {
      e1Moves.push('h1');
      map.set('e1', e1Moves);
    }

    if (e1Moves.includes('c1')) {
      e1Moves.push('a1');
      map.set('e1', e1Moves);
    }
  }

  if (turn === 'b' && game.get('e8')?.type === 'k') {
    const e8Moves = map.get('e8') || [];

    if (e8Moves.includes('g8')) {
      e8Moves.push('h8');
      map.set('e8', e8Moves);
    }

    if (e8Moves.includes('c8')) {
      e8Moves.push('a8');
      map.set('e8', e8Moves);
    }
  }

  return map;
};

const playRandomMove = (
  game: Chess,
  cg: ReturnType<typeof Chessground>,
  color: 'white' | 'black'
) => {
  if (game.turn() !== color[0]) return;

  const moves = game.moves({ verbose: true }) as Move[];
  if (moves.length === 0) return;

  const random = moves[Math.floor(Math.random() * moves.length)];
  game.move(random);

  cg.set({
    fen: game.fen(),
    check: game.isCheck(),
    turnColor: game.turn() === 'w' ? 'white' : 'black',
    movable: { dests: buildDests(game) },
  });

  cg.playPremove();
};

export function ChessBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef(new Chess());
  const cgRef = useRef<ReturnType<typeof Chessground> | null>(null);
  const startedRef = useRef(false);

  const [pending, setPending] = useState<PendingPromotion | null>(null);
  const [turn, setTurn] = useState<'w' | 'b'>(gameRef.current.turn());
  const [renderTrigger, setRenderTrigger] = useState(false);

  const dests = buildDests(gameRef.current);

  const roleMap: Record<
    'p' | 'k' | 'q' | 'r' | 'b' | 'n',
    'pawn' | 'king' | 'queen' | 'rook' | 'bishop' | 'knight'
  > = {
    p: 'pawn',
    k: 'king',
    q: 'queen',
    r: 'rook',
    b: 'bishop',
    n: 'knight',
  };
  const colorMap: Record<'w' | 'b', 'white' | 'black'> = {
    w: 'white',
    b: 'black',
  };

  const confirmPromotion = (
    cg: ReturnType<typeof Chessground> | null,
    e: React.MouseEvent<HTMLDivElement>,
    role: 'q' | 'r' | 'b' | 'n'
  ) => {
    e.stopPropagation();
    if (!pending || !cg) return;
    gameRef.current.move({
      from: pending.from,
      to: pending.to,
      promotion: role,
    });
    cg.set({ fen: gameRef.current.fen(), check: gameRef.current.isCheck() });
    setPending(null);

    setTimeout(() => playRandomMove(gameRef.current, cg, 'black'), 1000);
  };

  const cancelPromotion = (cg: ReturnType<typeof Chessground> | null) => {
    if (!pending || !cg) return;

    const pieces = new Map();

    const colorPiece = colorMap[pending.color];
    pieces.set(pending.from, { role: 'pawn', color: colorPiece });

    const captured = gameRef.current.get(pending.to as Square);
    if (captured) {
      const colorCaptured = colorMap[captured.color as 'w' | 'b'];
      const roleCaptured = roleMap[captured.type as 'q' | 'r' | 'b' | 'n'];
      pieces.set(pending.to, {
        color: colorCaptured,
        role: roleCaptured,
      });
    } else {
      pieces.set(pending.to, null);
    }
    cg.setPieces(pieces);
    cg.set({
      turnColor: gameRef.current.turn() === 'w' ? 'white' : 'black',
      movable: { dests: buildDests(gameRef.current) },
      lastMove: [],
    });
    setPending(null);
  };

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    if (!boardRef.current) return;

    const game = gameRef.current;

    const cg = Chessground(boardRef.current, {
      coordinates: true,
      orientation: 'white',
      movable: {
        free: false,
        color: 'white',
        dests,
      },
      premovable: {
        enabled: true,
        showDests: true,
      },
      events: {
        move: (orig: string, dest: string) => {
          if (game.turn() === 'w') {
            const piece = game.get(orig as Square);
            if (piece?.type === 'p') {
              const rank = dest[1];
              if (
                (piece.color === 'w' && rank === '8') ||
                (piece.color === 'b' && rank === '1')
              ) {
                setPending({ from: orig, to: dest, color: piece.color });
                return;
              }
            }

            if (piece?.type === 'k') {
              const castleMap: Record<string, Record<string, string>> = {
                e1: { h1: 'g1', a1: 'c1' },
                e8: { h8: 'g8', a8: 'c8' },
              };

              if (castleMap[orig] && castleMap[orig][dest]) {
                dest = castleMap[orig][dest];
              }
            }

            game.move({ from: orig, to: dest, promotion: 'q' });
            cg.set({
              fen: game.fen(),
              check: game.isCheck(),
              movable: { dests },
            });

            setTimeout(() => playRandomMove(game, cg, 'black'), 1000);
          }
        },
      },
    });

    cgRef.current = cg;

    return () => {
      cg.destroy();
      startedRef.current = false;
    };
  }, []);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Información del turno */}
          <div className="flex items-center justify-between w-full max-w-md">
            <div className="text-sm text-muted-foreground">
              Turno:{' '}
              <span className="font-semibold capitalize">
                {turn === 'w' ? 'Blancas' : 'Negras'}
              </span>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  cgRef.current?.toggleOrientation();
                  setRenderTrigger((prev) => !prev);
                }}
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Rotar
              </Button>
              <Button variant="outline" size="sm">
                <Flag className="h-4 w-4 mr-1" />
                Tablas
              </Button>
            </div>
          </div>

          {/* Tablero de ajedrez */}
          <div className="relative">
            <div className="flex items-center">
              {/* Tablero */}
              <div>
                <div ref={boardRef} className="cg-board w-[500px] h-[500px]" />
                {pending && (
                  <PromotionChoice
                    key={Number(renderTrigger)}
                    pending={pending}
                    orientation={cgRef.current?.state.orientation ?? 'white'}
                    cg={cgRef.current}
                    cancelPromotion={cancelPromotion}
                    confirmPromotion={confirmPromotion}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
