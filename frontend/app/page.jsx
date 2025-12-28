import Link from "next/link";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Bienvenido a la Biblioteca 
        </h1>
        <p className="text-lg text-center">
          Explora, gestiona y disfruta de tus libros favoritos con nuestro sistema.
        </p>
        <Link href="/libros">
          <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition">
            Gestion de Libros
          </button>
        </Link>
        <Link href="/usuarios">
          <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition">
            Gestion de Usuarios
          </button>
        </Link>
      </div>
    </main>
  );
}