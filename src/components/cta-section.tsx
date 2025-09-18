import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-12 md:p-16 text-center">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Crown className="h-12 w-12 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">
                  Registrate gratis y empezá a jugar
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                  Únete a la comunidad de ajedrez escolar más grande de Santa
                  Fe. Participa en partidas y torneos online con estudiantes de
                  toda la provincia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/auth/register">
                  <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                    Crear cuenta gratuita
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/play">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 h-auto bg-transparent"
                  >
                    Jugar como invitado
                  </Button>
                </Link>
              </div>

              <div className="pt-8 text-sm text-muted-foreground">
                <p>
                  ✓ Registro gratuito • ✓ Sin publicidad • ✓ Supervisión
                  educativa
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
