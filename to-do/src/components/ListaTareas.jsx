import React from 'react'

function ListaTareas() {
  return (

    <div>
        <h2>Lista de Tareas</h2>
        <div className='formulario d-flex flex-column'>
            <label 
                  className='mt-4'>Título:
            </label>
            <span className='w-75 mb-2'>Proeycto LiderApp</span>
            <label 
                  className='mt-4'>Fecha:
            </label>
            <span className='w-75 mb-2'>15 de agosto de 2022</span>
            <label 
                  className='mt-4'>Descripción:
            </label>
            <span className='w-75 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
    </div>
  )
}

export default ListaTareas