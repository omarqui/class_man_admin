import React, { Component } from 'react';
import MaestroGenerico from './MaestroGenerico';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const datos = [
    {
      id: 1,
      nombre: "Robizon Inoa"
    },
    {
      id: 2,
      nombre: "Fernando Peralta"
    },
    {
      id: 3,
      nombre: "Simon Perez"
    }
  ];

class MaestroProfesor extends Component{
    constructor(props){
        super(props);        
    }

    getNewProfesorObject(){
        const newProfesor = {
            id: null,
            nombre: ""
        };

        return newProfesor;
    }

    filterProfesor(busqueda){
        return i=>i.nombre.toLowerCase().includes(busqueda);
    }

    getListItem(i){
        return(
            <div>
                <p className="m-0"><strong>{i.nombre}</strong></p>
                <small >{i.id}</small>
            </div>            
        );
    }

    getFormDetail(itemSelected, onTextChanged, guardar, cancelar, esModoConsulta){
        return(
            <div>
            {itemSelected &&
                <>
                  {itemSelected.id && 
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="email" placeholder="Codigo" disabled value={itemSelected.id} />
                            </Form.Group>
                        </Col>
                    </Row>
                  }

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control 
                        type="Text" 
                        placeholder="Nombre" 
                        disabled = { esModoConsulta } 
                        value={itemSelected.nombre}
                        onChange={(e)=>onTextChanged(e,"nombre")}/>
                  </Form.Group>

                  <Button 
                      style={{float: "right"}} 
                      variant="primary" 
                      type="submit" 
                      className="ml-2"
                      disabled={ esModoConsulta }
                      onClick={guardar(itemSelected)}>                   
                      <FontAwesomeIcon icon="save" /> Guardar
                  </Button>
                  <Button 
                      style={{float: "right"}} 
                      variant="danger" 
                      type="submit" 
                      hidden={ esModoConsulta }
                      onClick={ cancelar }>                   
                      <FontAwesomeIcon icon="times" /> Cancelar
                  </Button>
                </>
              }
              </div>
        );
    }

    render(){
        return(
            <MaestroGenerico 
                titulo = "Profesores" 
                data = { datos }
                getNewObject = { this.getNewProfesorObject }
                getFilterCondicion = { this.filterProfesor }
                getListItem = { this.getListItem }
                getFormDetail = { this.getFormDetail }>

            </MaestroGenerico>
        );
    }
}

export default MaestroProfesor;