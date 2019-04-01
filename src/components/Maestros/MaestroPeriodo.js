import React, { Component } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import datosFactory from '../../constants/datos';
import Select from 'react-select';

const datosAll = datosFactory.getInstance();
const datos = datosAll.periodos;

let optionsMeses;

class MaestroPeriodo extends Component{
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
            mesIni: null,
            mesFin: null,
            descripcion: ""
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
                            <Form.Label>Mes Inicio</Form.Label>
                            <Select 
                                value={optionsMeses.find((mes)=>mes.value === itemSelected.mesIni)} 
                                options={optionsMeses} 
                                isDisabled = { esModoConsulta } 
                                onChange = { (o)=>onSelectChanged(o, "mesIni")  }/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formSelect">
                            <Form.Label>Mes Fin</Form.Label>
                            <Select 
                                value={optionsMeses.find((mes)=>mes.value === itemSelected.mesFin)} 
                                options={optionsMeses} 
                                isDisabled = { esModoConsulta } 
                                onChange = { (o)=>onSelectChanged(o, "mesFin")  }/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Descripcion" 
                    disabled = { esModoConsulta } 
                    value={itemSelected.descripcion}
                    onChange={(e)=>onTextChanged(e,"descripcion")}/>
                </Form.Group>
              </div>
        );
    }

    render(){
        return(
            <MaestroGenerico 
                titulo = "Periodos" 
                data = { datos }
                getNewObject = { this.getNewObject }
                getFilterCondicion = { this.filter }
                getListItem = { this.getListItem }
                getFormDetail = { this.getFormDetail }
                guardarHandler = { this.guardar }/>
        );
    }
}

export default MaestroPeriodo;