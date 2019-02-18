import React, { Component } from 'react';
import { OverlayTrigger, Tooltip, Navbar, Button, Card, ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PanelListaCompact from './PanelListaCompact';
import PanelDetalleCompact from './PanelDetalleCompact';

class MaestroGenerico extends Component{
    constructor (prop){
        super(prop);
    }
    
    render(){
        return(
          <div className="main border rounded shadow-sm p-3 d-block panel">
            <h2 className="text-center mb-5" >Manejo de ciclo</h2>
            <Row>
              <Col xs={6} md={5} lg={4}>
                <PanelListaCompact titulo="Lista"/>
              </Col>
              <Col>
                <PanelDetalleCompact titulo="Detalle"/>
              </Col>
            </Row>
          </div>
        );
      };
}


export default MaestroGenerico;