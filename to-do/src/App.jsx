import "./App.css";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { Container, Col, Row } from "react-bootstrap";
import ListaTareas from "./components/ListaTareas";

function App() {
  const [tareas, setTareas] = useState([]);
  const [updateTarea, setUpdatetarea] = useState({});

  useEffect(() => {
    console.log('Estoy pendiente')
    localStorage.setItem('tareas', JSON.stringify())

  }, [])
  


  const eliminarTarea = (id) => {
    const actuliazarTarea = tareas.filter((tarea) => tarea.id !== id);
    setTareas(actuliazarTarea);
  };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={6}>
            <Formulario
              tareas={tareas}
              setTareas={setTareas}
              updateTarea={updateTarea}
              setUpdatetarea={setUpdatetarea}
            />
          </Col>
          <Col lg={6}>
            <ListaTareas
              tareas={tareas}
              setUpdatetarea={setUpdatetarea}
              eliminarTarea={eliminarTarea}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
