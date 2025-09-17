'use client';

import { useState } from 'react';

type AuthFormProps = {
  type: 'login' | 'register';
};

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'login') {
      console.log('Login con:', email, password);
      // TODO: lógica de login
    } else {
      console.log('Registro con:', email, password);
      // TODO: lógica de registro
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto space-y-6 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
    >
      {/* Título */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {type === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {type === 'login'
            ? 'Accede con tu email y contraseña'
            : 'Regístrate para comenzar a jugar'}
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full py-2.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
      >
        {type === 'login' ? 'Ingresar' : 'Registrarse'}
      </button>

      {/* Link secundario */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {type === 'login' ? (
          <>
            ¿No tienes cuenta?{' '}
            <a
              href="/register"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Regístrate
            </a>
          </>
        ) : (
          <>
            ¿Ya tienes cuenta?{' '}
            <a
              href="/login"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Inicia sesión
            </a>
          </>
        )}
      </p>
    </form>
  );
}
