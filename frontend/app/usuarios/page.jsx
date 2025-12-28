"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/usuario") // ajusta según tu backend
      .then((res) => setUsuarios(res.data))
      .catch((err) => console.error("Error cargando usuarios:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Usuarios</h1>

      {/* Botones de navegación */}
      <div className="mb-6 flex flex-row space-x-4 justify-center">
        <button
          className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => router.push("/")}
        >
          Volver al Inicio
        </button>
        <button
          className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => router.push("/usuarios/nuevo")}
        >
          Agregar Nuevo Usuario
        </button>
      </div>

      {/* Renderizar lista de usuarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{usuario.nombre}</h2>
            <p className="text-gray-500 text-sm">ID: {usuario.id}</p>
            <p>Email: {usuario.email}</p>
            <p>Rol: {usuario.rol}</p>
          </div>
        ))}
      </div>
    </main>
  );
}