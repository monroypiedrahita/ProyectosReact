import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import { Container, Col, Row } from 'react-bootstrap'
import ListaTareas from './components/ListaTareas'
function App() {
  return (
    <div>
            <Header />
      <Container>
        <Row>
          <Col lg={6}>
          <Formulario />
          </Col>
          <Col lg={6}>
          <ListaTareas />
          
          </Col>
        </Row>
      </Container>

  
    </div>
  )
}

export default App
