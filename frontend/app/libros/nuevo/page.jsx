"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevoLibroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: "",
    id_autor: "",
    id_categoria: "",
    anio_publicacion: "",
    isbn: "",
    resumen: "",
    archivo_pdf: "",
    disponible: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/v1/libro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Libro creado correctamente");
        router.push("/libros"); // vuelve a la lista de libros
      } else {
        alert("Error al crear el libro");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agregar Nuevo Libro</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="id_autor"
          placeholder="ID Autor"
          value={formData.id_autor}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="id_categoria"
          placeholder="ID Categoría"
          value={formData.id_categoria}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="anio_publicacion"
          placeholder="Año de publicación"
          value={formData.anio_publicacion}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="resumen"
          placeholder="Resumen"
          value={formData.resumen}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="disponible"
            checked={formData.disponible}
            onChange={handleChange}
          />
          <span>Disponible</span>
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Guardar Libro
        </button>
      </form>
    </main>
  );
}