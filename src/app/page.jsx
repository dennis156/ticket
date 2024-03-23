"use client";
import { useState } from "react";
import { supabaseClient } from "./db/supabase";
import NavbarMenu from "./navbar/NavbarMenu";

export default function Home() {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    cp: "",
    manzana: "",
    lote: "",
    colonias: "",
    edad: "",
    fecha: "",
    horaEntrega: "",
    fechaPedido: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // La estructura del objeto a insertar debe coincidir con tu esquema de Supabase
    const {
      id,
      nombre,
      cp,
      manzana,
      lote,
      colonias,
      edad,
      fecha,
      horaEntrega,
      fechaPedido,
    } = formData;
    try {
      const { data, error } = await supabaseClient.from("usuarios").insert([
        {
          // Asegúrate de que los nombres de las propiedades coincidan con los campos de tu tabla en Supabase
          nombre: nombre,
          cp: cp,
          manzana: manzana,
          lote: lote,
          //colonias: colonias,
          edad: edad,
          //fecha: fecha,
          //hora_entrega: horaEntrega, // Asegúrate de ajustar a los nombres correctos de las columnas
          //fecha_pedido: fechaPedido, // Ajusta los nombres de las propiedades según tu esquema de Supabase
        },
      ]);

      if (error) throw error;

      // Limpia el formulario después de enviar los datos si es necesario
      console.log("Datos insertados correctamente:", data);
      setFormData({
        id: "",
        nombre: "",
        cp: "",
        manzana: "",
        lote: "",
        colonias: "",
        edad: "",
        fecha: "",
        horaEntrega: "",
        fechaPedido: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error.message);
    }
  };

  return (
    <>
      <NavbarMenu />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-6">
            <label htmlFor="id" className="block mb-2 font-semibold">
              ID:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="nombre" className="block mb-2 font-semibold">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cp" className="block mb-2 font-semibold">
              Código Postal (CP):
            </label>
            <input
              type="text"
              id="cp"
              name="cp"
              value={formData.cp}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="manzana" className="block mb-2 font-semibold">
              Manzana:
            </label>
            <input
              type="text"
              id="manzana"
              name="manzana"
              value={formData.manzana}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="lote" className="block mb-2 font-semibold">
              Lote:
            </label>
            <input
              type="text"
              id="lote"
              name="lote"
              value={formData.lote}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="colonias" className="block mb-2 font-semibold">
              Colonias:
            </label>
            <select
              id="colonias"
              name="colonias"
              value={formData.colonias}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              {/* Opciones de colonias */}
              <option value="colonia1">Colonia 1</option>
              <option value="colonia2">Colonia 2</option>
              <option value="colonia3">Colonia 3</option>
              {/* Añade más opciones según sea necesario */}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="edad" className="block mb-2 font-semibold">
              Edad:
            </label>
            <input
              type="text"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="fecha" className="block mb-2 font-semibold">
              Fecha:
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="horaEntrega" className="block mb-2 font-semibold">
              Hora de Entrega:
            </label>
            <input
              type="time"
              id="horaEntrega"
              name="horaEntrega"
              value={formData.horaEntrega}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="fechaPedido" className="block mb-2 font-semibold">
              Fecha de Pedido:
            </label>
            <input
              type="date"
              id="fechaPedido"
              name="fechaPedido"
              value={formData.fechaPedido}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
