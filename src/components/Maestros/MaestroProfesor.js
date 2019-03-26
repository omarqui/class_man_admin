import React, { Component } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import datosFactory from '../../constants/datos';

const datosAll = datosFactory.getInstance();
const datos = datosAll.profesores;

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

    getFormDetail(itemSelected, onTextChanged, esModoConsulta){
        return(
            <div>
                {itemSelected.id && 
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="formID">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="text" placeholder="Codigo" disabled value={itemSelected.id} />
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
                getFormDetail = { this.getFormDetail }
                guardarHandler = { this.guardar }/>
        );
    }
}

export default MaestroProfesor;