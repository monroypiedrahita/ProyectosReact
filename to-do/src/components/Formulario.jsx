import React from 'react'
import './Form.css'




function Formulario() {
  return (
  <div>
        <h2>Creación de Tareas</h2>
        <form>
          <div className='formulario d-flex flex-column mb-4'>
            <label 
              className='mt-4'>Título:
              </label>
            <input 
              type="text" 
              className='w-75 mb-2'
            placeholder="Título de la tarea"  />
            <label>Fecha: 

            </label>
            <input 
              type="date" 
              placeholder="Fecha de entrega" 
              className='w-75 mb-2' />
            <label 
              htmlFor='descripcion'
            >Descripción: </label>
            <textarea 
              id = "descripcion"
              type="text" className='w-75 mb-2'/>
            <input 
              type="submit" 
              className='boton mt-4 mb-4 w-75' 
              value="CREAR TAREA"/>
        </div>
      </form>
  
</div>

  )
}

export default Formulario