import React, { Component } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import datosFactory from '../../constants/datos';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const datosAll = datosFactory.getInstance();
const datos = datosAll.ciclos;

let optionsMeses;

class MaestroCiclo extends Component{
    constructor(props){
        super(props);   
        optionsMeses = datosAll.meses.map((mes,index)=>{
            return {
                value: index+1,
                label: mes
            };
        });
    }

    getNewObject(){
        return {
            id: null,
            fechaIni: null,
            fechaFin: null,
            estaAbierto: 1
        };        
    }

    filter(busqueda){
        return i=>i.descripcion.toLowerCase().includes(busqueda);
    }

    getListItem(i){
        return(
            <div>
                <p className="m-0"><strong>{i.descripcion}</strong></p>
                <small >{i.id}</small>
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

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formSelect">
                            <Form.Label>Fecha Inicio</Form.Label>
                            <DayPickerInput onDayChange={(day)=>{alert(day);}} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formSelect">
                            <Form.Label>Fecha Fin</Form.Label>
                            <Select 
                                value={optionsMeses.find((mes)=>mes.value === itemSelected.mesFin)} 
                                options={optionsMeses} 
                                isDisabled = { esModoConsulta } 
                                onChange = { (o)=>onSelectChanged(o, "mesFin")  }/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formSelectEstado">
                    <Form.Label>Estado</Form.Label>
                    <Select 
                        value={optionsMeses.find((mes)=>mes.value === itemSelected.mesFin)} 
                        options={optionsMeses} 
                        isDisabled = { esModoConsulta } 
                        onChange = { (o)=>onSelectChanged(o, "mesFin")  }/>
                </Form.Group>            
              </div>
        );
    }

    render(){
        return(
            <MaestroGenerico 
                titulo = "Ciclo" 
                data = { datos }
                getNewObject = { this.getNewObject }
                getFilterCondicion = { this.filter }
                getListItem = { this.getListItem }
                getFormDetail = { this.getFormDetail }
                guardarHandler = { this.guardar }/>
        );
    }
}

export default MaestroCiclo;