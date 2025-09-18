import { LoginForm } from '@/components/auth/login-form';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Iniciar Sesión"
      subtitle="Accede a tu cuenta de Ajedrez Escolar Santa Fe"
      linkText="¿No tienes cuenta? Regístrate aquí"
      linkHref="/auth/register"
    >
      <LoginForm />
    </AuthLayout>
  );
}
