import { RegisterForm } from '@/components/auth/register-form';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Crear Cuenta"
      subtitle="Únete a la comunidad de ajedrez escolar de Santa Fe"
      linkText="¿Ya tienes cuenta? Inicia sesión aquí"
      linkHref="/auth/login"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
