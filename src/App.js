import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import MenuTopBar from './MenuTopBar';
import MenuLateral from './MenuLateral';
import {Card, Collapse } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faPenAlt, faBook, faHourglassHalf, 
         faAngleDown, faAngleUp, faPlus, faPencilAlt,
         faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import MaestroGenerico from './MaestroGenerico';

library.add(faIgloo, faPenAlt, faBook, faHourglassHalf, 
            faAngleDown, faAngleUp, faPlus, faPencilAlt,
            faTrash, faSearch);

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
      <div>
      <MenuTopBar />
      <Container className="container-fluid">
      <Row>
          <Col xs={4} md = {3} lg={2}>            
            <MenuLateral />
          </Col>
          <Col >
            <MaestroGenerico />     
          </Col>          
      </Row>  
      </Container>    
      </div>
    );
  }
}

export default App;
