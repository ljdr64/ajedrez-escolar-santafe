'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white dark:bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Nombre */}
        <Link href="/" className="text-lg font-bold text-blue-600">
          Ajedrez - Escolar - Santa Fe
        </Link>

        {/* Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/play" className="hover:text-blue-600">
              Jugar
            </Link>
          </li>
          <li>
            <Link href="/tournaments" className="hover:text-blue-600">
              Torneos
            </Link>
          </li>
          <li>
            <Link href="/auth/login" className="hover:text-blue-600">
              Ingresar
            </Link>
          </li>
          <li>
            <Link href="/auth/register" className="hover:text-blue-600">
              Registrarse
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
