'use client';

import Link from 'next/link';

const tournaments = [
  {
    id: 1,
    title: 'Torneo Intercolegial Rosario',
    date: '25 de septiembre 2025',
    mode: 'Presencial',
    description:
      'Competencia entre escuelas de Rosario, categoría primaria y secundaria.',
  },
  {
    id: 2,
    title: 'Liga Provincial Online',
    date: '1 de octubre 2025',
    mode: 'Online',
    description:
      'Torneo abierto para estudiantes de toda la provincia, en formato blitz 5+3.',
  },
  {
    id: 3,
    title: 'Campeonato Escolar Santa Fe',
    date: '15 de octubre 2025',
    mode: 'Mixta',
    description:
      'El evento principal del año, clasificatorio para el ranking provincial.',
  },
];

export default function TournamentsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Torneos Escolares
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Descubre los próximos torneos de ajedrez escolar en la provincia de
          Santa Fe. Participa, aprende y compite con otros estudiantes.
        </p>
      </div>

      {/* Torneos */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {tournament.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {tournament.description}
              </p>
            </div>

            <div className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <p>📅 {tournament.date}</p>
              <p>🎯 Modalidad: {tournament.mode}</p>
            </div>

            <Link
              href={`/tournaments/${tournament.id}`}
              className="mt-6 inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
