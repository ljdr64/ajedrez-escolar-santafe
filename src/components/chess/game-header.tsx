'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Clock, User, Settings } from 'lucide-react';

export function GameHeader() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Información del juego */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-5 w-5 text-primary" />
              <span className="font-semibold">Partida Escolar</span>
            </div>
            <Badge variant="secondary">
              <Clock className="h-3 w-3 mr-1" />
              10 + 5
            </Badge>
            <Badge variant="outline">Casual</Badge>
          </div>

          {/* Controles del juego */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configuración
            </Button>
            <Button variant="destructive" size="sm">
              Abandonar
            </Button>
          </div>
        </div>

        {/* Información de jugadores */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Juan Pérez</span>
            <Badge variant="secondary" className="text-xs">
              1200
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">vs</div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">María González</span>
            <Badge variant="secondary" className="text-xs">
              1180
            </Badge>
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
