
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuTopBar from '../MenuTopBar';
import MenuLateral from '../MenuLateral';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faPenAlt, faBook, faHourglassHalf, 
         faAngleDown, faAngleUp, faPlus, faPencilAlt,
         faTrash, faSearch, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';         
import MaestroCiclo from '../MaestroCiclo';
import MaestroProfesor from '../MaestroProfesor';
import MaestroMateria from '../MaestroMateria';

const MAESTRO_MATERIA = 1;
const MAESTRO_PROFESOR = 2;
const MAESTRO_CICLO = 3;

library.add(faIgloo, faPenAlt, faBook, faHourglassHalf, 
            faAngleDown, faAngleUp, faPlus, faPencilAlt,
            faTrash, faSearch, faSave, faTimes);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
      formActivo:  1
    };
  }

  cambiarForm(form){
    this.setState({
      formActivo: form
    });
  }

  render() {
    let formActivo;

    switch (this.state.formActivo) {
      case MAESTRO_MATERIA:
        formActivo = <MaestroMateria />;
        break;
      case MAESTRO_PROFESOR:
        formActivo = <MaestroProfesor />;
        break;
      case MAESTRO_CICLO:
        formActivo = <MaestroCiclo />;
        break;
    
      default:
        break;
    }

    return (
      <div>
        <MenuTopBar />
        <Container className="container-fluid">
          <Row>
              <Col xs={4} md = {3} lg={2}>            
                <MenuLateral clickHandler = { this.cambiarForm }/>
              </Col>
              <Col >
                {
                  formActivo
                }                
              </Col>          
          </Row>  
        </Container>    
      </div>
    );
  }
}

export default App;
