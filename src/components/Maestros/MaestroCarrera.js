import React, { Component } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

const optionsProfesores = [
    { value: 1, label: 'Robizon Inoa' },
    { value: 2, label: 'Fernando Peralta' },
    { value: 3, label: 'Simon Perez' }
  ];

const datos = [
    {
      id: 1,
      nombre: "Ing. Sistema y Computo",
      idProfesorGuia: 1
    },
    {
      id: 2,
      nombre: "Educacion Matematica",
      idProfesorGuia: 1
    },
    {
      id: 3,
      nombre: "Mercadeo",
      idProfesorGuia: 2
    }
  ];

class MaestroCarrera extends Component{
    constructor(props){
        super(props);        
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
        return(
            <div>
                <p className="m-0"><strong>{i.nombre}</strong></p>
                <small >{optionsProfesores.find((p)=>p.value === i.idProfesorGuia).label }</small>
            </div>            
        );
    }

    getFormDetail(itemSelected, onTextChanged, onSelectChanged, esModoConsulta){
        return(
            <div>
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