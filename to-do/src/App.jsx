import './App.css'
import { useState } from "react";
import Formulario from './components/Formulario'
import Header from './components/Header'
import { Container, Col, Row } from 'react-bootstrap'
import ListaTareas from './components/ListaTareas'

function App() {

  const [tareas, setTareas] = useState([])

  return (
    <div>
            <Header />
      <Container>
        <Row>
          <Col lg={6}>
          <Formulario 
          tareas={tareas}
          setTareas={setTareas}
          />
          </Col>
          <Col lg={6}>
          <ListaTareas
            tareas={tareas}
          />
          </Col>
        </Row>
      </Container>

  
    </div>
  )
}

export default App
