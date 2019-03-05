import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import SubMenuLateral from './SubMenuLateral';
import { MAESTRO_MATERIA, MAESTRO_PROFESOR, MAESTRO_CICLO,
         MAESTRO_CARRERA} from "../../constants/forms";

class MenuLateral extends Component{
    constructor (prop){
        super(prop);
    }
    
    render(){
        const { clickHandler } = this.props;

        return(
          <div className="d-md-block bg-light sidebar mt-1">
            <div className="sidebar-sticky">
            <Nav 
              defaultActiveKey={MAESTRO_CICLO} 
              className="flex-column"
              onSelect={formSelect=>clickHandler(formSelect)}>                               
                <SubMenuLateral
                    title="Estructuras"
                    icon="pen-alt"
                    selectHandler = { clickHandler }>
                    <Nav.Link eventKey = {MAESTRO_CICLO}>Ciclo</Nav.Link>
                    <Nav.Link eventKey = {MAESTRO_CARRERA}>Carrera</Nav.Link>
                    <Nav.Link>Pensum</Nav.Link>
                    <Nav.Link eventKey = {MAESTRO_MATERIA}>Materia</Nav.Link>                   
                    <Nav.Link>Horario</Nav.Link>                   
                    <Nav.Link eventKey = {MAESTRO_PROFESOR}>Profesor</Nav.Link>                   
                    <Nav.Link>Aula</Nav.Link>                   
                    <Nav.Link>Cuatrimestre</Nav.Link>                                       
                </SubMenuLateral>  

                <SubMenuLateral
                    title="Cuatrimestre"
                    icon="book">
                    <Nav.Link href="/home">Cuatrimestre</Nav.Link>
                    <Nav.Link>Clases</Nav.Link>
                    <Nav.Link>Calendario</Nav.Link>                    
                </SubMenuLateral>                                               
            </Nav>
            </div>     
          </div>
        );
      }
}

export default MenuLateral;