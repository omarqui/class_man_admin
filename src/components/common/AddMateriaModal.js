import React, { Component, useState } from 'react';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonToolTip from '../common/ButtonToolTip';
import Select from 'react-select';

let optionsMateria;
class AddMateriaModal extends Component {
    
    constructor(props){
        super(props);

        optionsMateria = props.materias.map((materia)=>{
            return {
                value: materia,
                label: materia.nombre
            };
        });
    }

    onSave(){
        const { addHandler, closeHandler } = this.props;
        addHandler(this.props.materiaSelected);        
        closeHandler();
    }

    render(){

        const { ciclo, closeHandler, showModal, materiaSelected } = this.props;

        let materiaCiclo = materiaSelected;

        return(
        <Modal show={showModal} 
               onHide={()=>{closeHandler();}}
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregando materia a <b>Ciclo {ciclo.posicion}</b></Modal.Title>
            </Modal.Header>
            {
                materiaSelected && 
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
                                    onChange = { (o)=>this.props.onSelectChanged(o,"materia") }
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
                                    onChange = { (o)=>this.props.onSelectChanged(o, "prerequisito")  }
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
                                onChange={(e)=>this.props.onTextChanged(e,"cantCreditos")}
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