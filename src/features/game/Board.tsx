'use client';

import { useEffect, useRef } from 'react';
import { Chessground } from 'chessground';
import { Chess, Move, Square } from 'chess.js';
import { Key } from 'chessground/types';

import '@/styles/vendor/chessground/assets/chessground.base.css';
import '@/styles/vendor/chessground/assets/chessground.brown.css';
import '@/styles/vendor/chessground/assets/chessground.cburnett.css';

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

export default function Board() {
  const boardRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef(new Chess());
  const cgRef = useRef<ReturnType<typeof Chessground> | null>(null);
  const startedRef = useRef(false);

  const dests = buildDests(gameRef.current);

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
          if (gameRef.current.turn() === 'w') {
            const piece = gameRef.current.get(orig as Square);

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
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div ref={boardRef} className="cg-board w-[500px] h-[500px]" />
    </div>
  );
}
