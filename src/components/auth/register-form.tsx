"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    school: "",
    grade: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      setIsLoading(false)
      return
    }

    if (!acceptTerms) {
      setError("Debes aceptar los términos y condiciones")
      setIsLoading(false)
      return
    }

    // Simulación de registro
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Aquí iría la lógica real de registro
      console.log("Register attempt:", formData)

      // Redirigir al usuario después del registro exitoso
      window.location.href = "/play"
    } catch (err) {
      setError("Error al crear la cuenta. Intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Tu nombre"
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Apellido</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Tu apellido"
            value={formData.lastName}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="school">Escuela</Label>
        <Input
          id="school"
          name="school"
          placeholder="Nombre de tu escuela"
          value={formData.school}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="grade">Grado/Año</Label>
        <Select onValueChange={(value) => handleSelectChange("grade", value)} disabled={isLoading}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona tu grado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1° Grado</SelectItem>
            <SelectItem value="2">2° Grado</SelectItem>
            <SelectItem value="3">3° Grado</SelectItem>
            <SelectItem value="4">4° Grado</SelectItem>
            <SelectItem value="5">5° Grado</SelectItem>
            <SelectItem value="6">6° Grado</SelectItem>
            <SelectItem value="7">7° Grado</SelectItem>
            <SelectItem value="secundario1">1° Año Secundario</SelectItem>
            <SelectItem value="secundario2">2° Año Secundario</SelectItem>
            <SelectItem value="secundario3">3° Año Secundario</SelectItem>
            <SelectItem value="secundario4">4° Año Secundario</SelectItem>
            <SelectItem value="secundario5">5° Año Secundario</SelectItem>
            <SelectItem value="secundario6">6° Año Secundario</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Crea una contraseña segura"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirma tu contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            disabled={isLoading}
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={acceptTerms}
          onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
          disabled={isLoading}
        />
        <Label htmlFor="terms" className="text-sm leading-relaxed">
          Acepto los términos y condiciones y la política de privacidad del programa de Ajedrez Escolar Santa Fe
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading || !acceptTerms}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creando cuenta...
          </>
        ) : (
          "Crear Cuenta Gratuita"
        )}
      </Button>
    </form>
  )
}
