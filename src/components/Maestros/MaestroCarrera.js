import React, { Component } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import datosFactory from '../../constants/datos';

const datosAll = datosFactory.getInstance();
let optionsProfesores;

const datos = datosAll.carreras;

class MaestroCarrera extends Component{
    constructor(props){
        super(props);      
        
        optionsProfesores = datosAll.profesores.map((profesor,key)=>{
            return {
                value: profesor.id,
                label: profesor.nombre
            };
        });
    }

    getNewCarreraObject(){
        const newCarrera = {
            id: null,
            nombre: "",
            idProfesorGuia: null
        };

        return newCarrera;
    }

    filterCarrera(busqueda){
        return i=>i.nombre.toLowerCase().includes(busqueda);
    }

    getListItem(i){
        const temp = optionsProfesores.find((p)=>p.value === i.idProfesorGuia);
        const mLabel = temp && temp.label;

        return(
            <div>
                <p className="m-0"><strong>{i.nombre}</strong></p>
                <small >{ mLabel }</small>
            </div>            
        );
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

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Nombre" 
                    disabled = { esModoConsulta } 
                    value={itemSelected.nombre}
                    onChange={(e)=>onTextChanged(e,"nombre")}/>
                </Form.Group>

                <Form.Group controlId="formSelect">
                    <Form.Label>Profesor</Form.Label>
                    <Select 
                        value={optionsProfesores.find((p)=>p.value === itemSelected.idProfesorGuia)} 
                        options={optionsProfesores} 
                        isDisabled = { esModoConsulta } 
                        onChange = { (o)=>onSelectChanged(o, "idProfesorGuia")  }/>
                </Form.Group>
              </div>
        );
    }

    render(){
        return(
            <MaestroGenerico 
                titulo = "Carrera" 
                data = { datos }
                getNewObject = { this.getNewCarreraObject }
                getFilterCondicion = { this.filterCarrera }
                getListItem = { this.getListItem }
                getFormDetail = { this.getFormDetail }
                guardarHandler = { this.guardar }/>
        );
    }
}

export default MaestroCarrera;