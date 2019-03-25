import React, { Component, useState } from 'react';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonToolTip from '../common/ButtonToolTip';
import Select from 'react-select';

let optionsMateria;
class AddMateriaModal extends Component {
    
    constructor(props){
        super(props);
        // const materiaIni = props.materiaSelected === undefined ? {
        //     materia: {
        //         id: 1,
        //         codigo: "ab2356",
        //         nombre: "Ingles 1",
        //         cantCreditos: 3,
        //         UrlProgramaClase: ""
        //     },
        //     prerequisito: {
        //         id: 2,
        //         codigo: "789456",
        //         nombre: "Introduccion Programacion",
        //         cantCreditos: 4,
        //         urlProgramaClase: ""
        //     },
        //     cantCreditos: 5
        // } : props.materiaSelected;
        
        this.state = {
            materiaCiclo: props.materiaSelected
        };

        optionsMateria = props.materias.map((materia)=>{
            return {
                value: materia,
                label: materia.nombre
            };
        });
    }

    
    onSelectChanged (optionSelected,field){
        const newMateriaCiclo = {...this.materiaCiclo, [field]: optionSelected.value};
        this.setState({
            materiaCiclo: newMateriaCiclo
        });       
    }

    onTextChanged(event, field){
        const newMateriaCiclo = {...this.state.materiaCiclo, [field]: event.target.value};
        this.setState({
            materiaCiclo: newMateriaCiclo
        });
    }

    onSave(){
        const { ciclo, materias, addHandler, closeHandler } = this.props;
        addHandler(this.state.materiaCiclo);        
        closeHandler();
    }

    componentDidMount(){
        //if(this.state.materiaCiclo === undefined || this.props.materiaSelected.materia.id !== this.state.materiaCiclo.materia.id)
            console.log("didMount", this.props.materiaSelected);
            
            this.setState({
                materiaCiclo: this.props.materiaSelected
            });

    }

    render(){

        const { ciclo, materias, addHandler, closeHandler, showModal, materiaSelected } = this.props;
        const { materiaCiclo } = this.state;

        console.log("Modal state",    materiaCiclo);
        console.log("Modal prop",    materiaSelected);

        return(
        <Modal show={showModal} 
               onHide={()=>{closeHandler();}}
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregando materia a <b>Ciclo {ciclo.posicion}</b></Modal.Title>
            </Modal.Header>
            {
                materiaCiclo &&                 
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formSelect">
                                        <Form.Label>Materia</Form.Label>
                                        <Select 
                                            value={ optionsMateria.find((m)=>m.value.id === materiaCiclo.materia.id)} 
                                            options={optionsMateria} 
                                            // isDisabled = { esModoConsulta } 
                                            onChange = { (o)=>this.onSelectChanged(o,"materia") }
                                            />
                                    </Form.Group>
                                </Col>                        
                            </Row>
                            <Row>
                                <Col sm={7}>
                                    <Form.Group controlId="formSelect">
                                        <Form.Label>Requisito</Form.Label>
                                        <Select 
                                            value={ optionsMateria.find((m)=>m.value.id === materiaCiclo.prerequisito.id)} 
                                            options={optionsMateria} 
                                            // isDisabled = { esModoConsulta } 
                                            onChange = { (o)=>this.onSelectChanged(o, "prerequisito")  }
                                            />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Cantidad Creditos</Form.Label>
                                        <Form.Control 
                                        type="Text" 
                                        placeholder="Cantidad" 
                                        // disabled = { esModoConsulta } 
                                        value={materiaCiclo.cantCreditos}
                                        onChange={(e)=>this.onTextChanged(e,"cantCreditos")}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                                        
                    </Modal.Body>
                
            }
            
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{closeHandler();}}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={()=>{this.onSave();}}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
        );
    }
}

export default AddMateriaModal;