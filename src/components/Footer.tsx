export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-800 text-center text-sm py-4">
      <p className="text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Ajedrez - Escolar - Santa Fe · Todos los
        derechos reservados
      </p>
    </footer>
  );
}
