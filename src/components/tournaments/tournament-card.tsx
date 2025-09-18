import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Trophy, MapPin, Timer } from "lucide-react"

interface Tournament {
  id: number
  title: string
  description: string
  date: string
  time: string
  participants: number
  maxParticipants: number
  category: string
  status: "upcoming" | "active" | "finished"
  prize: string
  organizer: string
  format: string
  timeControl: string
}

interface TournamentCardProps {
  tournament: Tournament
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  const getStatusBadge = (status: Tournament["status"]) => {
    switch (status) {
      case "upcoming":
        return <Badge variant="secondary">Próximo</Badge>
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600">En curso</Badge>
      case "finished":
        return <Badge variant="outline">Finalizado</Badge>
    }
  }

  const getStatusColor = (status: Tournament["status"]) => {
    switch (status) {
      case "upcoming":
        return "border-l-blue-500"
      case "active":
        return "border-l-green-500"
      case "finished":
        return "border-l-gray-400"
    }
  }

  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 border-l-4 ${getStatusColor(tournament.status)}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg leading-tight">{tournament.title}</CardTitle>
            <div className="flex items-center space-x-2">
              {getStatusBadge(tournament.status)}
              <Badge variant="outline" className="text-xs">
                {tournament.category}
              </Badge>
            </div>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">{tournament.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Información principal */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{tournament.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>
              {tournament.participants}/{tournament.maxParticipants} participantes
            </span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Timer className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{tournament.timeControl}</span>
          </div>
        </div>

        {/* Información adicional */}
        <div className="pt-2 border-t space-y-1">
          <div className="flex items-center text-xs text-muted-foreground">
            <Trophy className="h-3 w-3 mr-2 flex-shrink-0" />
            <span>{tournament.prize}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
            <span>{tournament.organizer}</span>
          </div>
        </div>

        {/* Barra de progreso de participantes */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Inscriptos</span>
            <span>{Math.round((tournament.participants / tournament.maxParticipants) * 100)}% completo</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min((tournament.participants / tournament.maxParticipants) * 100, 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Botón de acción */}
        <div className="pt-2">
          {tournament.status === "upcoming" && (
            <Button className="w-full" size="sm">
              Ver más
            </Button>
          )}
          {tournament.status === "active" && (
            <Button className="w-full" size="sm">
              Ver en vivo
            </Button>
          )}
          {tournament.status === "finished" && (
            <Button variant="outline" className="w-full bg-transparent" size="sm">
              Ver resultados
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
