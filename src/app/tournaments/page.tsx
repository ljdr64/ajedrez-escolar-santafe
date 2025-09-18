import { TournamentHeader } from "@/components/tournaments/tournament-header"
import { TournamentFilters } from "@/components/tournaments/tournament-filters"
import { TournamentGrid } from "@/components/tournaments/tournament-grid"

export default function TournamentsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <TournamentHeader />
      <div className="mt-8 space-y-6">
        <TournamentFilters />
        <TournamentGrid />
      </div>
    </div>
  )
}
