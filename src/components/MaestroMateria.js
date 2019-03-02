import React, { Component } from 'react';
import MaestroGenerico from './MaestroGenerico';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const datos = [
    {
      id: 1,
      codigo: "ab2356",
      nombre: "Ingles 1",
      cantCreditos: 3,
      UrlProgramaClase: ""
    },
    {
      id: 2,
      codigo: "789456",
      nombre: "Introduccion Programacion",
      cantCreditos: 4,
      urlProgramaClase: ""
    },
    {
      id: 3,
      codigo: "12346",      
      nombre: "Prueba",
      cantCreditos: 2,
      urlProgramaClase: ""
    }
  ];

class MaestroMateria extends Component{
    constructor(props){
        super(props);        
    }

    getNewMateriaObject(){
        const newMateria = {
            id: null,
            codigo: "",
            nombre: "Prueba",
            cantCreditos: 2,
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

    getFormDetail(itemSelected, onTextChanged, guardar, cancelar, esModoConsulta){
        return(
            <div>
                {itemSelected.id && 
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control 
                                    type="email" 
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
                    
                
                <div className="mb-5">
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
                </div>
                          
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