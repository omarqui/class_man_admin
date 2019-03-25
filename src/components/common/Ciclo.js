import React, { Component, useState } from 'react';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import CuatrimestreTable from "./CuatrimestreTable";
import AddMateriaModal from "./AddMateriaModal";
import ButtonToolTip from '../common/ButtonToolTip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Ciclo extends Component {
    constructor(props){
        super(props);        
        

        this.state = {
            ciclo: props.ciclo,
            showModal: false,
            materiaSelected: props.materiaSelected
        };

        this.abrirHandler = this.abrirHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.editarHandler = this.editarHandler.bind(this);
    }

    addHandler (materia){
        const newCiclo = { ...this.ciclo};        
        newCiclo.materias.push(materia);
        this.setState({
            ciclo: newCiclo
        });
    }

    editarHandler (materia){   
        console.log("editar",materia);

        this.setState({
            materiaSelected: {...materia},
            showModal: true
        });
        

        // const newCiclo = { ...ciclo};
        // const indice = newCiclo.materias.findIndex(m=>m.materia.id === materia.materia.id);
        // console.log(indice);
        // newCiclo[indice] = materia;
        // setCiclo(newCiclo);
    }

    closeHandler (){
        this.setState({            
            showModal: false
        });
    }

    abrirHandler(){
        this.setState({            
            showModal: true
        });
    }

    render(){
        const { materiasAll, ciclo } = this.props;        
        const { materiaSelected, showModal } = this.state;
        console.log("render",materiaSelected);
        
        return(
            <Card className = "mb-3">
                <div className="mt-4 ml-3 mr-3 mb-0 border-bottom pb-3">
                    <h5 className="d-inline" >Ciclo {ciclo.posicion}</h5>
                    <span  className="ml-2">
                        <ButtonToolTip 
                            esTitulo={true} 
                            msg = "Añadir materia" 
                            variant = "outline-success"
                            clickHandler={this.abrirHandler}>
                            <FontAwesomeIcon icon="plus" />
                        </ButtonToolTip>
                        <AddMateriaModal 
                            ciclo = {ciclo} 
                            materias={materiasAll} 
                            addHandler={this.addHandler} 
                            showModal={showModal} 
                            closeHandler={this.closeHandler} 
                            materiaSelected={materiaSelected}/>
                    </span>
                </div>   
                <Card.Body className="pt-0 pl-3 pr-3 pb-2">
                    <CuatrimestreTable 
                        materias = {ciclo.materias} editarHandler={this.editarHandler}/>
                </Card.Body>
            </Card>
        );
    }
    
};

export default Ciclo;