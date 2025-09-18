import type React from "react"
import Link from "next/link"
import { Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  linkText: string
  linkHref: string
}

export function AuthLayout({ children, title, subtitle, linkText, linkHref }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        {/* Logo institucional */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Crown className="h-8 w-8 text-primary" />
            <div className="text-left">
              <div className="font-bold text-lg">Ajedrez Escolar</div>
              <div className="text-sm text-muted-foreground">Santa Fe</div>
            </div>
          </Link>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="text-base">{subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {children}

            <div className="text-center">
              <Link href={linkHref} className="text-sm text-primary hover:underline font-medium">
                {linkText}
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Información adicional */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Plataforma oficial del Gobierno de Santa Fe</p>
          <p className="mt-1">Supervisión educativa • Ambiente seguro</p>
        </div>
      </div>
    </div>
  )
}
