import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import SubMenuLateral from './SubMenuLateral';
import { MAESTRO_MATERIA, MAESTRO_PROFESOR, MAESTRO_AULA,
         MAESTRO_CARRERA, MAESTRO_PENSUM, MAESTRO_PERIODO,
         MAESTRO_HORARIO, MAESTRO_CICLO} from "../../constants/forms";

class MenuLateral extends Component{
    constructor (prop){
        super(prop);
    }
    
    render(){
        const { clickHandler, esMini } = this.props;
        const classItem = esMini?"pl-2 pr-2":"";
        
        return(
          <div className="d-md-block bg-light sidebar mt-1">
            <div className="sidebar-sticky">
            <Nav 
              defaultActiveKey={MAESTRO_AULA} 
              className="flex-column"
              onSelect={formSelect=>clickHandler(formSelect)}>                               
                <SubMenuLateral
                    title= {esMini? "": "Plataforma"}
                    icon="pen-alt"
                    selectHandler = { clickHandler }
                    esMini={esMini}>
                    {/* <Nav.Link className={classItem} eventKey = {MAESTRO_AULA}>Ciclo</Nav.Link> */}
                    <Nav.Link className={classItem} eventKey = {MAESTRO_CARRERA}>Carrera</Nav.Link>
                    <Nav.Link className={classItem} eventKey = {MAESTRO_MATERIA}>Materia</Nav.Link>
                    <Nav.Link className={classItem} eventKey = {MAESTRO_PROFESOR}>Profesor</Nav.Link>                   
                    <Nav.Link className={classItem} eventKey = {MAESTRO_PENSUM}>Pensum</Nav.Link>
                    
                    <Nav.Link className={classItem} eventKey = {MAESTRO_HORARIO}>Horario</Nav.Link>                                       
                    <Nav.Link className={classItem} eventKey = {MAESTRO_AULA}>Aula</Nav.Link>                   
                    {/* <Nav.Link className={classItem} eventKey = {MAESTRO_PERIODO}>Periodos</Nav.Link>                    */}
                    {/* <Nav.Link className={classItem}>Cuatrimestre</Nav.Link>                                        */}
                </SubMenuLateral>  

                <SubMenuLateral
                    title={esMini? "": "Ciclo Actual"}
                    icon="book"
                    esMini={esMini}>
                    <Nav.Link className={classItem} eventKey = {MAESTRO_CICLO}>Ciclo</Nav.Link>
                    <Nav.Link className={classItem}>Clases</Nav.Link>
                    <Nav.Link className={classItem}>Calendario</Nav.Link>                    
                </SubMenuLateral>                                               
            </Nav>
            </div>     
          </div>
        );
      }
}

export default MenuLateral;