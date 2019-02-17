import React, { Component } from 'react';
import { Nav, NavDropdown, Collapse, Button, Card, ListGroup } from 'react-bootstrap';
import SubMenuLateral from './SubMenuLateral';

class MenuLateral extends Component{
    constructor (prop){
        super(prop);
    }
    
    render(){
        return(
          <div className="bg-dark mb-5 text-light menu-lateral-wrapper">      
            <Nav defaultActiveKey="/home" className="flex-column">

                <h4>{this.props.children}</h4>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
        
                <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                    Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <SubMenuLateral
                    title="Click">
                        <ListGroup.Item action variant="light" href="#link1">
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action variant="light" href="#link2">
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item action>This one is a button</ListGroup.Item>
                </SubMenuLateral>  

                <SubMenuLateral
                    title="Hola">
                    <ListGroup.Item action variant="light" href="#link1">
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action variant="light" href="#link2">
                        Link 2
                        </ListGroup.Item>                        
                </SubMenuLateral>                                               
            </Nav>
          </div>
        );
      };
}


export default MenuLateral;