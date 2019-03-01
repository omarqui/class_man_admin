
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuTopBar from './MenuTopBar';
import MenuLateral from './MenuLateral';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faPenAlt, faBook, faHourglassHalf, 
         faAngleDown, faAngleUp, faPlus, faPencilAlt,
         faTrash, faSearch, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import MaestroGenerico from './MaestroGenerico';
import MaestroProfesor from './MaestroProfesor';

library.add(faIgloo, faPenAlt, faBook, faHourglassHalf, 
            faAngleDown, faAngleUp, faPlus, faPencilAlt,
            faTrash, faSearch, faSave, faTimes);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true
    };
  }
  render() {
    return (
      <div>
      <MenuTopBar />
      <Container className="container-fluid">
      <Row>
          <Col xs={4} md = {3} lg={2}>            
            <MenuLateral />
          </Col>
          <Col >
            <MaestroProfesor />     
          </Col>          
      </Row>  
      </Container>    
      </div>
    );
  }
}

export default App;
