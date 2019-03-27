import React, { Component } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import datosFactory from '../../constants/datos';

const datosAll = datosFactory.getInstance();
const datos = datosAll.materias;

class MaestroMateria extends Component{
    constructor(props){
        super(props);        
    }

    getNewMateriaObject(){
        const newMateria = {
            id: null,
            codigo: "",
            nombre: "",
            cantCreditos: 0,
            urlProgramaClase: ""
        };

        return newMateria;
    }

    filterMateria(busqueda){
        return i=>(i.nombre+i.codigo+i.cantCreditos).toLowerCase().includes(busqueda);
    }

    getListItem(i){
        return(
            <div>
                <p className="m-0"><strong>{i.nombre}</strong></p>
                <small >{i.codigo}</small>
            </div>            
        );
    }

    getFormDetail(itemSelected, onTextChanged, onSelectChanged, esModoConsulta){
        return(
            <div>
                {itemSelected.id && 
                    <Row>
                        <Col xs={12} md={6} lg={5} xl={4}>
                            <Form.Group controlId="formID">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Codigo" 
                                    disabled = { esModoConsulta } 
                                    value={itemSelected.codigo} 
                                    onChange={(e)=>onTextChanged(e,"codigo")}/>
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
                
                <Form.Group controlId="inputCantCredito">
                    <Form.Label>Cantidad Creditos</Form.Label>
                    <Row>
                        <Col md={4}>
                            <Form.Control 
                                type="Number" 
                                placeholder="Cantidad Creditos" 
                                disabled = { esModoConsulta } 
                                value={itemSelected.cantCreditos}
                                onChange={(e)=>onTextChanged(e,"cantCreditos")}
                                width = "20px"
                                />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="inputUrlPrograma">
                    <Form.Label>Programa Clase</Form.Label>                    
                        <Form.Control 
                            type="Text" 
                            placeholder="Url programa Clase" 
                            disabled = { esModoConsulta } 
                            value={itemSelected.urlProgramaClase}
                            onChange={(e)=>onTextChanged(e,"urlProgramaClase")}
                            width = "20px"
                            />                
                </Form.Group>                                              
              </div>
        );
    }

    render(){
        return(
            <MaestroGenerico 
                titulo = "Materias" 
                data = { datos }
                getNewObject = { this.getNewMateriaObject }
                getFilterCondicion = { this.filterMateria }
                getListItem = { this.getListItem }
                getFormDetail = { this.getFormDetail }/>
        );
    }
}

export default MaestroMateria;