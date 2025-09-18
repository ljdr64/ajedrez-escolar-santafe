import { TournamentCard } from './tournament-card';

// Datos de ejemplo de torneos
const tournaments = [
  {
    id: 1,
    title: 'Copa Escolar Santa Fe 2025',
    description:
      'Torneo oficial de ajedrez para estudiantes de nivel primario y secundario de toda la provincia.',
    date: '15 de Diciembre, 2025',
    time: '14:00 hs',
    participants: 128,
    maxParticipants: 256,
    category: 'Mixta',
    status: 'upcoming' as const,
    prize: 'Medallas y certificados',
    organizer: 'Ministerio de Educación SF',
    format: 'Eliminación directa',
    timeControl: '15 + 10',
  },
  {
    id: 2,
    title: 'Torneo Interescolar Rosario',
    description:
      'Competencia entre escuelas de la región metropolitana de Rosario.',
    date: '8 de Diciembre, 2025',
    time: '10:00 hs',
    participants: 64,
    maxParticipants: 128,
    category: 'Secundaria',
    status: 'active' as const,
    prize: 'Trofeos y menciones',
    organizer: 'Región Educativa II',
    format: 'Sistema suizo',
    timeControl: '10 + 5',
  },
  {
    id: 3,
    title: 'Festival de Ajedrez Primaria',
    description:
      'Evento recreativo para estudiantes de 1° a 6° grado con actividades lúdicas.',
    date: '22 de Noviembre, 2025',
    time: '16:00 hs',
    participants: 45,
    maxParticipants: 80,
    category: 'Primaria',
    status: 'upcoming' as const,
    prize: 'Participación y diversión',
    organizer: 'Escuela N° 1234',
    format: 'Round robin',
    timeControl: '20 + 0',
  },
  {
    id: 4,
    title: 'Campeonato Provincial Sub-16',
    description:
      'Torneo clasificatorio para el campeonato nacional de ajedrez escolar.',
    date: '30 de Noviembre, 2025',
    time: '9:00 hs',
    participants: 32,
    maxParticipants: 64,
    category: 'Secundaria',
    status: 'upcoming' as const,
    prize: 'Clasificación nacional',
    organizer: 'Federación Santafesina',
    format: 'Sistema suizo',
    timeControl: '30 + 15',
  },
  {
    id: 5,
    title: 'Torneo de Fin de Año',
    description:
      'Celebración del cierre del año escolar con partidas amistosas y premiación.',
    date: '18 de Diciembre, 2025',
    time: '15:30 hs',
    participants: 89,
    maxParticipants: 120,
    category: 'Mixta',
    status: 'upcoming' as const,
    prize: 'Reconocimientos especiales',
    organizer: 'Coordinación Provincial',
    format: 'Partidas simultáneas',
    timeControl: '15 + 5',
  },
  {
    id: 6,
    title: 'Copa Otoño 2025',
    description: 'Torneo que ya finalizó con gran participación estudiantil.',
    date: '15 de Abril, 2025',
    time: '14:00 hs',
    participants: 156,
    maxParticipants: 200,
    category: 'Mixta',
    status: 'finished' as const,
    prize: 'Medallas de oro, plata y bronce',
    organizer: 'Ministerio de Educación SF',
    format: 'Sistema suizo',
    timeControl: '20 + 10',
  },
];

export function TournamentGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Torneos disponibles</h2>
        <span className="text-sm text-muted-foreground">
          {tournaments.length} torneos encontrados
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}
