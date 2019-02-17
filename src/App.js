import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import MenuTopBar from './MenuTopBar';
import MenuLateral from './MenuLateral';
import {Card, Collapse } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true
    };
  }
  render() {
    const { open } = this.state;
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to refresh. 
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
      <MenuTopBar />
      <Container className="mt-5 pt-2">
      <Row>
          <Col xs={4} md = {3} lg={2}>            
            <MenuLateral>Menu</MenuLateral>
          </Col>
          <Col >
            <div className="mt-3">            
              Contenido
              <Button
                onClick={() => this.setState({ open: !open })}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                click
              </Button>
              <Collapse in={this.state.open} id="example-collapse-text">
                <div>
                  <Card >
                    <Card.Body>
                      <Card.Text>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </div>   
              </Collapse>
            </div>          
          </Col>          
      </Row>  
      </Container>    
      </div>
    );
  }
}

export default App;
