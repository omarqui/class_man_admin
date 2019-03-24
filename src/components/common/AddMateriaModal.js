import React, { Component, useState } from 'react';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonToolTip from '../common/ButtonToolTip';
import Select from 'react-select';

function onTextChanged(event, field){
    const newSeleted = {...this.state.selected, [field]: event.target.value};
    this.setState({
      selected: newSeleted
    });      
}


const AddMateriaModal = (props)=>{      
    const [ show, setShow ] = useState(false);
    const [ materiaCiclo, setMateriaCiclo ] = useState({
        materia: {
            id: 1,
            codigo: "ab2356",
            nombre: "Ingles 1",
            cantCreditos: 3,
            UrlProgramaClase: ""
        },
        prerequisito: {
            id: 2,
            codigo: "789456",
            nombre: "Introduccion Programacion",
            cantCreditos: 4,
            urlProgramaClase: ""
        },
        cantCreditos: 5
    });
    const { numero, materias } = props;

    const optionsMateria = materias.map((materia)=>{
        return {
            value: materia,
            label: materia.nombre
        };
    });

    const onSelectChanged = (optionSelected,field)=>{
        const newMateriaCiclo = {...materiaCiclo, [field]: optionSelected.value};
        setMateriaCiclo(newMateriaCiclo);
    };

    const onTextChanged = (event, field)=>{
        const newMateriaCiclo = {...materiaCiclo, [field]: event.target.value};
        setMateriaCiclo(newMateriaCiclo); 
    };
    
    return (
    <>          
        <ButtonToolTip 
            esTitulo={true} 
            msg = "Añadir materia" 
            variant = "outline-success"
            clickHandler={()=>{setShow(true);}}>
            <FontAwesomeIcon icon="plus" />
        </ButtonToolTip>
        
        <Modal show={show} 
               onHide={()=>{setShow(false);}}
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregando materia a <b>Ciclo {numero}</b></Modal.Title>
            </Modal.Header>
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
                                    onChange = { (o)=>onSelectChanged(o,"materia") }
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
                                    onChange = { (o)=>onSelectChanged(o, "prerequisito")  }
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
                                onChange={(e)=>onTextChanged(e,"cantCreditos")}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setShow(false);}}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={()=>{setShow(false);}}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
    </>);   
};

export default AddMateriaModal;