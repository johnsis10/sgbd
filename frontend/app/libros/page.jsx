"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LibrosPage() {
  const [libros, setLibros] = useState([]);
  const router = useRouter();
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ titulo: "", isbn: "", disponible: true });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/libro")
      .then((res) => setLibros(res.data))
      .catch((err) => console.error("Error cargando libros:", err));
  }, []);

  const borrarLibro = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este libro?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/v1/libro/${id}`);
      setLibros((prev) => prev.filter((l) => l.id !== id));
    } catch (err) {
      console.error("Error eliminando libro:", err);
      alert("No se pudo eliminar el libro.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Libros</h1>
      
      <div className="mb-6 flex justify-right">
      <button
        className="mt-4 px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        onClick={() => router.push("/")}
      >
        Volver al Inicio
      </button>

      </div>
      <div className="mb-6 flex justify-right">
      <button
        className="mt-4  px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => router.push("/libros/nuevo")}
      >
        Agregar Nuevo Libro
      </button>
      </div>  
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libros.map((libro) => {
          const isEditing = editingId === libro.id;
          return (
            <div key={libro.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{libro.titulo}</h2>
              <p className="text-gray-500 text-sm">ID: {libro.id}</p>
              <p className="text-gray-700">
                Autor: {libro.autor?.nombreCompleto} (
                {libro.autor?.nacionalidad})
              </p>

              <p>Categoría: {libro.categoria?.nombre_categoria}</p>
              <p>ISBN: {libro.isbn}</p>

              {!isEditing && (
                <>
                  <button
                    className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => {
                      setEditingId(libro.id);
                      setForm({
                        titulo: libro.titulo ?? "",
                        isbn: libro.isbn ?? "",
                        disponible: libro.disponible ?? true,
                      });
                    }}
                  >
                    Editar
                  </button>

                  <button
                    className="mt-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => borrarLibro(libro.id)}
                  >
                    Eliminar
                  </button>
                </>
              )}

              {isEditing && (
                <p className="mt-4 text-sm text-blue-700">
                  Editando este libro…
                </p>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
