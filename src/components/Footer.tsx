import Link from 'next/link';
import { Crown } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Crown className="h-6 w-6 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold">Ajedrez Escolar</span>
                <span className="text-sm text-muted-foreground">Santa Fe</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Plataforma oficial de ajedrez escolar de la provincia de Santa Fe.
              Promoviendo el desarrollo intelectual y estratégico en las
              escuelas.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-3">Enlaces</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/play"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Jugar
              </Link>
              <Link
                href="/tournaments"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Torneos
              </Link>
            </div>
          </div>

          {/* Cuenta */}
          <div>
            <h3 className="font-semibold mb-3">Cuenta</h3>
            <div className="space-y-2">
              <Link
                href="/auth/login"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/auth/register"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Gobierno de Santa Fe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
