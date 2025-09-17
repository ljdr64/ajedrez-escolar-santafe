'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-6">
      {/* Hero */}
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
        Ajedrez · Escolar · Santa Fe
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        Plataforma digital para aprender, practicar y competir en torneos
        escolares de ajedrez en la provincia de Santa Fe.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/auth/login"
          className="w-40 text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Ingresar
        </Link>
        <Link
          href="/auth/register"
          className="w-40 text-center px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
        >
          Registrarse
        </Link>
      </div>
    </main>
  );
}
