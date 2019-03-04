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
                className="fixed-top shadow-sm flex-md-nowrap "
                style={{                    
                    paddingLeft: 0,
                    paddingRight: 0
                }}>                
                <div style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 3fr 1fr",                    
                    padding: "0 1rem"
                }}>
                    <div style={{   
                      alignSelf: "center"
                    }}>                        
                        <Navbar.Brand href="#home">
                            <FontAwesomeIcon icon="hourglass-half" /> ClassMan
                        </Navbar.Brand></div>
                    <div style={{
                      background: "red",                      
                      justifySelf: "center",
                      alignSelf: "center"
                    }}>
                        <div>
                            Hola
                        </div>
                        <div>
                            adios
                        </div>  
                    </div>
                    <div style={{                      
                      justifySelf: "end",
                      alignSelf: "center"
                    }}>usuario</div>
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