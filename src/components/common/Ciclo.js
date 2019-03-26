import React, { Component, useState } from 'react';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import CuatrimestreTable from "./CuatrimestreTable";
import AddMateriaModal from "./AddMateriaModal";
import ButtonToolTip from '../common/ButtonToolTip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import estados from '../../constants';
const [ CREANDO, EDITANDO, CONSULTANDO ] = estados;

class Ciclo extends Component {
    constructor(props){
        super(props);        
        

        this.state = {
            ciclo: props.ciclo,
            showModal: false,
            materiaSelected: null,
            estado: CONSULTANDO
        };

        this.abrirHandler = this.abrirHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.editarHandler = this.editarHandler.bind(this);
        this.onSelectChanged = this.onSelectChanged.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.addHandler = this.addHandler.bind(this);
    }

    onSelectChanged (optionSelected,field){
        const newMateriaCiclo = {...this.state.materiaSelected, [field]: optionSelected.value};        
        
        this.setState({
            materiaSelected: newMateriaCiclo
        });       
    }

    onTextChanged(event, field){
        const newMateriaCiclo = {...this.state.materiaSelected, [field]: event.target.value};
        this.setState({
            materiaSelected: newMateriaCiclo
        });
    }

    addHandler (materia){
        const newCiclo = { ...this.state.ciclo};        
        if (this.state.estado == CREANDO){
            newCiclo.materias.push(materia);            
        }
        else if (this.state.estado === EDITANDO) {
            const index = newCiclo.materias.findIndex(m=>m.id === materia.id);
            newCiclo.materias[index] = materia;
        }

        this.setState({
            ciclo: newCiclo
        });
    }

    removeHandler(materia){
        const newCiclo = { ...this.state.ciclo}; 
        const index = newCiclo.materias.findIndex(m=>m.id === materia.id)

        newCiclo.materias.splice(index,1);
        this.setState({
            ciclo: newCiclo
        });
    }

    editarHandler (materia){           
        if (!this.props.disabled)
            this.setState({
                materiaSelected: {...materia},
                showModal: true,
                estado: EDITANDO
            });
        

        // const newCiclo = { ...ciclo};
        // const indice = newCiclo.materias.findIndex(m=>m.materia.id === materia.materia.id);
        // console.log(indice);
        // newCiclo[indice] = materia;
        // setCiclo(newCiclo);
    }

    closeHandler (){
        this.setState({            
            showModal: false,
            estado: CONSULTANDO
        });
    }

    abrirHandler(){
        this.setState({            
            showModal: true,
            materiaSelected: 
            {
                id:null,
                materia: {
                    // id: 1,
                    // codigo: "ab2356",
                    // nombre: "Ingles 1",
                    // cantCreditos: 3,
                    // UrlProgramaClase: ""
                },
                prerequisito: {
                    // id: 2,
                    // codigo: "789456",
                    // nombre: "Introduccion Programacion",
                    // cantCreditos: 4,
                    // urlProgramaClase: ""
                },
                cantCreditos: 0
            },
            estado: CREANDO
        });
    }

    render(){
        const { materiasAll, ciclo, disabled } = this.props;        
        const { materiaSelected, showModal, estado } = this.state;    
        
        return(
            <Card className = "mb-3">
                <div className="mt-4 ml-3 mr-3 mb-0 border-bottom pb-3">
                    <h5 className="d-inline" >Ciclo {ciclo.posicion}</h5>
                    <span  className="ml-2">
                        <ButtonToolTip 
                            esTitulo={true} 
                            msg = "Añadir materia" 
                            variant = "outline-success"
                            clickHandler={this.abrirHandler}
                            disabled = {disabled}>
                            <FontAwesomeIcon icon="plus" />
                        </ButtonToolTip>
                        <AddMateriaModal 
                            ciclo = {ciclo} 
                            materias={materiasAll} 
                            addHandler={this.addHandler} 
                            showModal={showModal} 
                            closeHandler={this.closeHandler} 
                            materiaSelected={materiaSelected}
                            onTextChanged={this.onTextChanged}
                            onSelectChanged={this.onSelectChanged}
                            estado={estado}/>
                    </span>
                </div>   
                <Card.Body className="pt-0 pl-3 pr-3 pb-2">
                    <CuatrimestreTable 
                        materias = {ciclo.materias} 
                        editarHandler={this.editarHandler}/>
                </Card.Body>
            </Card>
        );
    }
    
};

export default Ciclo;