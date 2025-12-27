"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LibrosPage() {
  const [libros, setLibros] = useState([]);
  const [editingId, setEditingId] = useState(null); // id del libro en edición
  const [form, setForm] = useState({
    titulo: "",
    isbn: "",
    disponible: true,
  });

  // Cargar libros al inicio
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/libro")
      .then(res => setLibros(res.data))
      .catch(err => console.error("Error cargando libros:", err));
  }, []);

  // Guardar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Alternar disponible
  const handleToggleDisponible = () => {
    setForm(prev => ({ ...prev, disponible: !prev.disponible }));
  };

  // Enviar actualización al backend
  const submitEdit = async () => {
    if (!editingId) return;
    try {
      const payload = {
        titulo: form.titulo,
        isbn: form.isbn,
        disponible: form.disponible,
      };
      await axios.put(`http://localhost:3000/api/v1/libro/${editingId}`, payload);

      // Actualizar lista local
      setLibros(prev =>
        prev.map(l => (l.id === editingId ? { ...l, ...payload } : l))
      );

      setEditingId(null); // cerrar edición
    } catch (err) {
      console.error("Error actualizando libro:", err);
      alert("No se pudo actualizar el libro.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Lista de Libros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libros.map(libro => {
          const isEditing = editingId === libro.id;
          return (
            <div
              key={libro.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{libro.titulo}</h2>
              <p className="text-gray-700">
                Autor: {libro.autor?.nombreCompleto} ({libro.autor?.nacionalidad})
              </p>
              <p className="text-gray-500 text-sm">ID: {libro.id}</p>
              <p className="text-gray-700">ISBN: {libro.isbn ?? "—"}</p>
              <p className="text-gray-700">
                Disponible: {libro.disponible ? "Sí" : "No"}
              </p>

              {/* Botón Editar */}
              {!isEditing && (
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
              )}

              {/* Formulario de edición con Guardar y Cancelar */}
              {isEditing && (
                <div className="mt-4 space-y-3 border-t pt-4">
                  <div>
                    <label className="block text-sm font-medium">Título</label>
                    <input
                      name="titulo"
                      value={form.titulo}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">ISBN</label>
                    <input
                      name="isbn"
                      value={form.isbn}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Disponible</label>
                    <button
                      type="button"
                      onClick={handleToggleDisponible}
                      className={`px-3 py-2 rounded ${
                        form.disponible ? "bg-green-600 text-white" : "bg-gray-300"
                      }`}
                    >
                      {form.disponible ? "Sí" : "No"}
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      onClick={submitEdit}
                    >
                      Guardar
                    </button>
                    <button
                      className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
                      onClick={() => setEditingId(null)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}