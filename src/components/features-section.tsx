import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Trophy, BarChart3, BookOpen } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Jugar partidas en línea",
    description:
      "Conectate con estudiantes de toda la provincia y juega partidas en tiempo real con sistema de emparejamiento educativo.",
  },
  {
    icon: Trophy,
    title: "Participar en torneos",
    description: "Únete a torneos escolares oficiales organizados por el Ministerio de Educación de Santa Fe.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas escolares",
    description: "Seguí tu progreso y el de tu escuela con métricas detalladas de rendimiento y mejora.",
  },
  {
    icon: BookOpen,
    title: "Aprendizaje de ajedrez",
    description: "Accede a lecciones interactivas, ejercicios tácticos y material educativo adaptado al nivel escolar.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Una plataforma completa para el ajedrez escolar
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Herramientas diseñadas específicamente para el desarrollo del pensamiento lógico y estratégico en el ámbito
            educativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
