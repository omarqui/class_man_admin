import React, { Component } from 'react';
import { Nav, NavDropdown, Navbar, Button, Card, ListGroup } from 'react-bootstrap';
import SubMenuLateral from './SubMenuLateral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuLateral extends Component{
    constructor (prop){
        super(prop);
    }
    
    render(){
        return(
          <div className="d-md-block bg-light sidebar mt-1">
            <div className="sidebar-sticky">
            <Nav defaultActiveKey="/home" className="flex-column">                               
                <SubMenuLateral
                    title="Estructuras"
                    icon="pen-alt">
                    <Nav.Link href="/home">Ciclo</Nav.Link>
                    <Nav.Link>Carrera</Nav.Link>
                    <Nav.Link>Pensum</Nav.Link>
                    <Nav.Link>Materia</Nav.Link>                   
                    <Nav.Link>Horario</Nav.Link>                   
                    <Nav.Link>Profesor</Nav.Link>                   
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
      };
}


export default MenuLateral;