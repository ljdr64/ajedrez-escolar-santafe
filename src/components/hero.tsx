import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Crown, Play, Trophy } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo institucional */}
          <div className="flex items-center space-x-3 mb-4">
            <Crown className="h-12 w-12 text-primary" />
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-balance">
                Ajedrez • Escolar • Santa Fe
              </h1>
              <p className="text-sm text-muted-foreground">
                Gobierno de la Provincia de Santa Fe
              </p>
            </div>
          </div>

          {/* Título principal */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Desarrollá tu
              <span className="text-primary block">
                pensamiento estratégico
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              La plataforma oficial de ajedrez escolar que conecta estudiantes
              de toda la provincia en partidas y torneos educativos.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/play">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                <Play className="mr-2 h-5 w-5" />
                Jugar ahora
              </Button>
            </Link>
            <Link href="/tournaments">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-transparent"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Ver torneos
              </Button>
            </Link>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-8 pt-12 w-full max-w-md">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Escuelas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                100+
              </div>
              <div className="text-sm text-muted-foreground">
                Partidas diarias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
