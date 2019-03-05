
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
import MaestroCiclo from '../Maestros/MaestroCiclo';
import MaestroProfesor from '../Maestros/MaestroProfesor';
import MaestroMateria from '../Maestros/MaestroMateria';
import { MAESTRO_MATERIA, MAESTRO_PROFESOR, MAESTRO_CICLO } from "../../constants/forms";

library.add(faIgloo, faPenAlt, faBook, faHourglassHalf, 
            faAngleDown, faAngleUp, faPlus, faPencilAlt,
            faTrash, faSearch, faSave, faTimes);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
      formActivo:  MAESTRO_MATERIA
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
      case MAESTRO_CICLO:
        form = <MaestroCiclo />;
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
        <Container className="container-fluid">
          <Row>
              <Col xs={2} md = {3} lg={2}>            
                <MenuLateral clickHandler = { this.cambiarForm }/>
              </Col>
              <Col >
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
