import React, { useEffect, useState } from "react";
import "./Form.css";

function Formulario({ tareas, setTareas, updateTarea, setUpdatetarea }) {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);

  useEffect(() => {
    if (Object.keys(updateTarea).length > 0) {
      setTitulo(updateTarea.titulo);
      setFecha(updateTarea.fecha);
      setDescripcion(updateTarea.descripcion);
    }
  }, [updateTarea]);

  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion formulario

    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    } else {
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 2000);
    }

    // Objeto de tareas

    const objetoTareas = {
      titulo,
      fecha,
      descripcion,
    };

    if (updateTarea.id) {
      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === updateTarea.id ? objetoTareas : tareaState
      );
      setTareas(tareasActualizadas);
      setUpdatetarea({});

      
    } else {
      objetoTareas.id = generarId();
      setTareas([...tareas, objetoTareas]);
    }

    setTitulo("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <div>
      <h2 className="CrearTarea">Creación de Tareas</h2>
      <form onSubmit={handleSubmit}>
        {error ? (
          <strong className="dateFault">***Faltan datos por ingresar***</strong>
        ) : (
          " "
        )}
        {send ? (
          <strong className="dateSend">Tarea guardada exitosamente!!!</strong>
        ) : (
          " "
        )}
        <div className="formulario d-flex flex-column mb-4">
          <label className="mt-4">Título:</label>
          <input
            type="text"
            className="w-75 mb-2"
            placeholder="Título de la tarea"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <label>Fecha:</label>
          <input
            type="date"
            placeholder="Fecha de entrega"
            className="w-75 mb-2"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <label htmlFor="descripcion">Descripción: </label>
          <textarea
            id="descripcion"
            type="text"
            className="w-75 mb-2"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          {!updateTarea.id ? (
            <input
              type="submit"
              className="boton mt-4 mb-4 w-75"
              value="CREAR TAREA"
            />
          ) : (
            <input
              type="submit"
              className="act mt-4 mb-4 w-75"
              value="ACTUALIZAR TAREA"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Formulario;
