import React, { Component, useState } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import datosFactory from '../../constants/datos';
import TimeKeeper from 'react-timekeeper';

const datosAll = datosFactory.getInstance();
const datos = datosAll.horarios;

function getHora(horario){
    const hora = horario.hora > 12 ? horario.hora - 12 : horario.hora;
    const minuto = horario.minuto === 0 ? '00' : horario.minuto;

    return `${hora}:${minuto}`;
}

function setStateBase(thisBase,field,value){
    thisBase.setState({
        [field]: value
    });
}

class MaestroHorario extends Component{
    constructor(props){
        super(props);           
    }

    getNewObject(){
        return {
            id: null,
            horaIni:null,
            horaFin:null
        };        
    }

    

    filter(busqueda){
        return h=>`${getHora(h.horaIni)}-${getHora(h.horaFin)}`.includes(busqueda);
    }

    getListItem(h){
        return(
            <div>
                <p className="m-0">
                    <strong>
                    {
                        `${getHora(h.horaIni)}-${getHora(h.horaFin)}`
                    }
                    </strong>
                </p>
                <small >{h.id}</small>
            </div>            
        );
    }

    getFormDetail(itemSelected, onTextChanged, onSelectChanged, esModoConsulta, thisBase){
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
                    <Col md={5}>
                        <HoraPicker
                            titulo="Hora Inicio"
                            disabled = { esModoConsulta }
                            hora = { itemSelected.horaIni }
                            onChange = {(newTime)=>setStateBase(thisBase,
                                                                "selected",
                                                                {...itemSelected, "horaIni": { hora: newTime.hour, minuto: newTime.minute}})}/>

                        
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <HoraPicker
                            titulo="Hora Fin"
                            disabled = { esModoConsulta }
                            hora = { itemSelected.horaFin }
                            onChange = {(newTime)=>setStateBase(thisBase,
                                                                "selected",
                                                                {...itemSelected, "horaFin": { hora: newTime.hour, minuto: newTime.minute}})}/> 
                    </Col>
                </Row>                
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

const HoraPicker = (props)=>{
    const { titulo, disabled, hora, onChange } = props;
    const horaConverted = {
        hour: hora.hora, 
        minute: hora.minuto
    };

    const displayValue = getHora(hora);

    const [showPicker, setShowPicker] = useState(false);

    return(
        <Form.Group controlId="formBasicPassword">
            <Form.Label>{titulo}</Form.Label>
            {!showPicker && 
                <Form.Control 
                    type="Text" 
                    placeholder="Descripcion" 
                    disabled = { disabled } 
                    value={ displayValue }                    
                    onClick={()=>setShowPicker(true)}
                    />}
            <div 
                style={{
                    position: "absolute",
                    top: "30px"
                }} >
                {
                    showPicker &&
                    <TimeKeeper 
                        switchToMinuteOnHourSelect 
                        closeOnMinuteSelect
                        onDoneClick={()=>setShowPicker(false)}
                        onChange={onChange}
                        // onChange={(newTime)=>onTextChanged({target:{value:newTime}},"horaIni")}
                        time={horaConverted}/>
                }                            
            </div>
            
        </Form.Group>
    );
};

export default MaestroHorario;