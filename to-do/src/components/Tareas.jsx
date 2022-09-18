
import Button from 'react-bootstrap/Button';

function Tareas({tarea, setUpdatetarea}) {

  const {titulo, fecha, descripcion} = tarea



  return (

  <div className='formulario d-flex flex-column mb-4'>
      <label 
          className='mt-4'>TITULO:
      </label>
      <span className='w-75 mb-2'>{titulo}</span>
      <label 
          className='mt-4'>Fecha:
      </label>
      <span className='w-75 mb-2'>{fecha}</span>
      <label 
          className='mt-4'>Descripción:
      </label>
      <span className='w-75 mb-2'>{descripcion}</span>
      <div>
      <Button
        onClick={()=> setUpdatetarea(tarea)}
        variant="success"
       >Editar</Button>{' '} 
      <Button variant="danger">Eliminar</Button>{' '}
      </div>
  </div>



  )
}

export default Tareas