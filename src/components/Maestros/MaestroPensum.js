import React, { Component, useState } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import Select from 'react-select';
import Ciclo from "../common/Ciclo";
import datosFactory from '../../constants/datos';

let newDatos = datosFactory.getInstance();
const datos = newDatos.pensums;
let optionsCarreras, optionsMateria;

class MaestroPensum extends Component{
    constructor(props){
        super(props);  
        
        optionsCarreras = newDatos.carreras.map((carrera,key)=>{
            return {
                value: carrera,
                label: carrera.nombre
            };    
        });
    }

    getNewPensumObject(){
        const newObject = {
            id: null,
            carrera: {},
            cantCiclos: 1,
            nota: "",
            ciclos:[
                {
                    posicion: 1,
                    materias:[
                        {
                            materia: {},
                            prerequisito: {},
                            cantCreditos: 0
                        }
                    ]
                }
            ]
        };

        return newObject;
    }

    filterHandler(busqueda){
        return i=>i.carrera.nombre.toLowerCase().includes(busqueda);
    }

    getListItem(i){
        return(
            <div>
                <p className="m-0"><strong>{i.carrera.nombre}</strong></p>
                <small >{ i.cantCiclos }</small>
            </div>            
        );
    }

    agregarMateria(ciclo, materia){
        ciclo.materias.push(materia);
    }

    getFormDetail(itemSelected, onTextChanged, onSelectChanged, esModoConsulta){
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

                <Form.Group controlId="formSelect">
                    <Form.Label>Carrera</Form.Label>
                    <Select 
                        value={ optionsCarreras.find((p)=>p.value.id === itemSelected.carrera.id)} 
                        options={optionsCarreras} 
                        isDisabled = { esModoConsulta } 
                        onChange = { (o)=>onSelectChanged(o, "carrera")  }/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Cantidad Ciclos</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Cantidad" 
                    disabled = { esModoConsulta } 
                    value={itemSelected.cantCiclos}
                    onChange={(e)=>onTextChanged(e,"nombre")}/>
                </Form.Group>
                
                {
                    itemSelected.ciclos.map((ciclo,id) => {
                        return (
                            <Ciclo 
                                ciclo = {ciclo}
                                materiasAll = {newDatos.materias}
                                key = {id}
                                disabled = { esModoConsulta }
                                /> 
                        );
                    })
                }
                
              </div>
        );
    }

    render(){
        console.log("Maestro pensum",newDatos);
        return(            
            <MaestroGenerico 
                titulo = "Pensum" 
                data = { datos }
                getNewObject = { this.getNewPensumObject }
                getFilterCondicion = { this.filterHandler }
                getListItem = { this.getListItem }
                getFormDetail = { this.getFormDetail } />
        );
    }
}



export default MaestroPensum;