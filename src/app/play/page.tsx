'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Users, Cpu } from 'lucide-react';

const presets = [
  { label: '1+0', limit: 60, increment: 0 },
  { label: '2+1', limit: 120, increment: 1 },
  { label: '3+0', limit: 180, increment: 0 },
  { label: '3+2', limit: 180, increment: 2 },
  { label: '5+0', limit: 300, increment: 0 },
  { label: '5+2', limit: 300, increment: 2 },
  { label: '8+0', limit: 480, increment: 0 },
  { label: '10+0', limit: 600, increment: 0 },
  { label: '10+5', limit: 600, increment: 5 },
];

export default function PlayPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'friend' | 'ai'>('friend');
  const [selectedPreset, setSelectedPreset] = useState(presets[4]);
  const [waiting, setWaiting] = useState(false);
  const [challengeId, setChallengeId] = useState<string | null>(null);

  const startGame = () => {
    // const res = await fetch('/api/lichess/start', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     limit: selectedPreset.limit,
    //     increment: selectedPreset.increment,
    //   }),
    // });

    // const data = await res.json();

    // if (!data.gameId) {
    //   console.error('Error creando partida:', data.error || data);
    //   return;
    // }
    setChallengeId('dummyChallengeId123');
    setWaiting(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg space-y-4 min-w-[320px]">
      <Card>
        <CardContent className="p-6 flex justify-center gap-4">
          <Button
            variant={mode === 'friend' ? 'default' : 'outline'}
            onClick={() => setMode('friend')}
            className="flex items-center gap-2 h-15 sm:h-20 w-30 sm:w-40 text-xl sm:text-2xl cursor-pointer"
          >
            <Users className="!h-6 !w-6" /> Amigo
          </Button>
          <Button
            variant={mode === 'ai' ? 'default' : 'outline'}
            onClick={() => setMode('ai')}
            className="flex items-center gap-2 h-15 sm:h-20 w-30 sm:w-40 text-xl sm:text-2xl cursor-pointer"
          >
            <Cpu className="!h-6 !w-6" /> IA
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 grid grid-cols-3 gap-2">
          {presets.map((p) => (
            <Button
              key={p.label}
              variant={selectedPreset.label === p.label ? 'default' : 'outline'}
              onClick={() => setSelectedPreset(p)}
              className="w-full h-16 sm:h-24 cursor-pointer text-xl sm:text-2xl"
            >
              {p.label}
            </Button>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={startGame}
              className="h-15 sm:h-20 w-30 sm:w-40 text-xl sm:text-2xl cursor-pointer"
            >
              Jugar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={waiting} onOpenChange={setWaiting}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Esperando al rival…</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-500 mt-2">
            Challenge ID: <span className="font-semibold">{challengeId}</span>
            <br />
            Modo:{' '}
            <span className="font-semibold capitalize">
              {mode === 'friend' ? 'Amigos' : 'IA'}
            </span>
            <br />
            Tiempo:{' '}
            <span className="font-semibold">{selectedPreset.label}</span>
          </p>
          <div className="flex justify-end mt-4">
            <Button
              variant="destructive"
              onClick={() => {
                setWaiting(false);
                setChallengeId(null);
              }}
              className="cursor-pointer"
            >
              Cancelar reto
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
