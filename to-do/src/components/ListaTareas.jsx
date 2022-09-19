import Tareas from "./Tareas";
import "./Form.css";
import { useEffect } from "react";

function ListaTareas({ tareas, setUpdatetarea, eliminarTarea }) {
  return (
    <>
      {tareas && tareas.length ? (
        <div>
          <div>
            <h2>Lista de Tareas</h2>
            <div className="Tareas">
              <div className="interno">
                {tareas.map((tarea) => {
                  return (
                    <Tareas
                      key={tarea.id}
                      tarea={tarea}
                      setUpdatetarea={setUpdatetarea}
                      eliminarTarea={eliminarTarea}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>No hay tareas pendientes</h2>
      )}
    </>
  );
}
export default ListaTareas;
