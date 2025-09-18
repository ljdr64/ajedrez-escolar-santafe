import { Button } from "@/components/ui/button"
import { Trophy, Plus, Calendar } from "lucide-react"

export function TournamentHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Torneos Escolares</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Participa en torneos oficiales de ajedrez escolar de la provincia de Santa Fe
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Calendario
        </Button>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Crear Torneo
        </Button>
      </div>
    </div>
  )
}
