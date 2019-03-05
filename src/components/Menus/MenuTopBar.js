import "./styles.css";
import React, { Component } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MenuTopBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(        
            <Navbar 
                bg="dark" 
                expand="lg" 
                variant="dark" 
                className="fixed-top  shadow-sm flex-md-nowrap ">                
                <div className="text-light menu-top-bar" >
                    <div className="align-self-center">                        
                        <Navbar.Brand href="#home">
                            <FontAwesomeIcon icon="hourglass-half" /> ClassMan
                        </Navbar.Brand></div>
                    <div>
                        <h5 className="m-0 text-center">
                            Enero - Abril
                        </h5>
                        <div className="text-center">
                            Cuatrimestre
                        </div>  
                    </div>
                    <div className="text-right align-self-center">
                        usuario
                    </div>
                </div>
                
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>                 */}                           
            </Navbar>
            
        );
    }
}

export default MenuTopBar;