
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuTopBar from '../Menus/MenuTopBar';
import MenuLateral from '../Menus/MenuLateral';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faPenAlt, faBook, faHourglassHalf, 
         faAngleDown, faAngleUp, faPlus, faPencilAlt,
         faTrash, faSearch, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';         
import { MaestroProfesor, MaestroMateria, MaestroCiclo,
         MaestroCarrera, MaestroPensum, MaestroPeriodo, 
         MaestroHorario} from '../Maestros/';
import { MAESTRO_MATERIA, MAESTRO_PROFESOR, MAESTRO_AULA,
         MAESTRO_CARRERA, MAESTRO_PENSUM, MAESTRO_PERIODO,
         MAESTRO_HORARIO } from "../../constants/forms";

library.add(faIgloo, faPenAlt, faBook, faHourglassHalf, 
            faAngleDown, faAngleUp, faPlus, faPencilAlt,
            faTrash, faSearch, faSave, faTimes);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
      formActivo:  MAESTRO_HORARIO
    };

    this.cambiarForm = this.cambiarForm.bind(this);
  }

  cambiarForm(form){
    this.setState({
      formActivo: parseInt(form)
    });
  }

  getForm(){
    let form;

    switch (this.state.formActivo) {
      case MAESTRO_MATERIA:
        form = <MaestroMateria />;
        break;
      case MAESTRO_PROFESOR:
        form = <MaestroProfesor />;
        break;
      case MAESTRO_AULA:
        form = <MaestroCiclo />;
        break;
      case MAESTRO_CARRERA:
        form = <MaestroCarrera />;
        break;
      case MAESTRO_PENSUM:
        form = <MaestroPensum />;
        break;   
      case MAESTRO_PERIODO:
        form = <MaestroPeriodo />;
        break;  
      case MAESTRO_HORARIO:
        form = <MaestroHorario />;
        break;        
      default:
        break;
    }
    return form;
  }

  render() {
    const form = this.getForm();

    return (
      <div>
        <MenuTopBar />
        <Container className="container-fluid" >
          <Row>
              <Col className="d-none d-md-block" md={2} >            
                <MenuLateral clickHandler = { this.cambiarForm }/>
              </Col>
              <Col className="d-none d-sm-block d-md-none" sm={1} >            
                <MenuLateral clickHandler = { this.cambiarForm } esMini/>
              </Col>
              <Col sm={11} md={10} >
                {
                  form 
                }                
              </Col>          
          </Row>  
        </Container>    
      </div>
    );
  }
}

export default App;
