'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, MessageCircle, BookOpen, BarChart3 } from 'lucide-react';

export function GameSidebar() {
  const moves = [
    '1. e4 e5',
    '2. Nf3 Nc6',
    '3. Bb5 a6',
    '4. Ba4 Nf6',
    '5. O-O Be7',
  ];

  return (
    <div className="space-y-4">
      {/* Reloj de juego */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Tiempo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="font-medium">María González</span>
            <Badge variant="secondary" className="text-lg font-mono">
              8:45
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border-2 border-primary/20">
            <span className="font-medium">Juan Pérez</span>
            <Badge className="text-lg font-mono">9:12</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Historial de movimientos */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Movimientos</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-32">
            <div className="space-y-1">
              {moves.map((move, index) => (
                <div
                  key={index}
                  className="text-sm font-mono p-2 hover:bg-muted rounded cursor-pointer"
                >
                  {move}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat del juego */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            Chat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-24 mb-3">
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">
                <span className="font-medium">Juan:</span> ¡Buena suerte!
              </div>
              <div className="text-muted-foreground">
                <span className="font-medium">María:</span> ¡Igualmente!
              </div>
            </div>
          </ScrollArea>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Enviar mensaje
          </Button>
        </CardContent>
      </Card>

      {/* Herramientas de aprendizaje */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Herramientas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-transparent"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Análisis
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-transparent"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Estadísticas
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
