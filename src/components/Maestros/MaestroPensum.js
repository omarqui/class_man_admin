import React, { Component, useState } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonToolTip from '../common/ButtonToolTip';
import datosFactory from '../../constants/datos';

let newDatos = datosFactory.getInstance();
const datos = newDatos.pensums;
let optionsCarreras;

class MaestroPensum extends Component{
    constructor(props){
        super(props);  
        
        optionsCarreras = newDatos.carreras.map((carrera,key)=>{
            return {
                value: carrera,
                label: carrera.nombre
            };    
        });
    }

    getNewPensumObject(){
        const newObject = {
            id: null,
            carrera: {},
            cantCiclos: 1,
            nota: "",
            ciclos:[
                {
                    posicion: 1,
                    materias:[
                        {
                            materia: {},
                            prerequisito: {},
                            cantCreditos: 0
                        }
                    ]
                }
            ]
        };

        return newObject;
    }

    filterHandler(busqueda){
        return i=>i.carrera.nombre.toLowerCase().includes(busqueda);
    }

    getListItem(i){
        return(
            <div>
                <p className="m-0"><strong>{i.carrera.nombre}</strong></p>
                <small >{ i.cantCiclos }</small>
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

                <Form.Group controlId="formSelect">
                    <Form.Label>Carrera</Form.Label>
                    <Select 
                        value={ optionsCarreras.find((p)=>p.value.id === itemSelected.carrera.id)} 
                        options={optionsCarreras} 
                        isDisabled = { esModoConsulta } 
                        onChange = { (o)=>onSelectChanged(o, "carrera")  }/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Cantidad Ciclos</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Cantidad" 
                    disabled = { esModoConsulta } 
                    value={itemSelected.cantCiclos}
                    onChange={(e)=>onTextChanged(e,"nombre")}/>
                </Form.Group>
                
                {
                    itemSelected.ciclos.map((ciclo,id) => {
                        return (
                            <Ciclo 
                                numero = {ciclo.posicion}
                                materias = {ciclo.materias}
                                key = {id}
                                /> 
                        );
                    })
                }
                
              </div>
        );
    }

    componentWillMount(){
        
    }

    render(){
        console.log("Maestro pensum",newDatos);
        return(
            
            <MaestroGenerico 
                titulo = "Pensum" 
                data = { datos }
                getNewObject = { this.getNewPensumObject }
                getFilterCondicion = { this.filterHandler }
                getListItem = { this.getListItem }
                getFormDetail = { this.getFormDetail } />
        );
    }
}

const Ciclo = (props)=>{
    const { numero, materias } = props;
    return(
        <Card className = "mb-3">
            <div className="mt-4 ml-3 mr-3 mb-0 border-bottom pb-3">
                <h5 className="d-inline" >Ciclo {numero}</h5>
                <span  className="ml-2">
                    <AddMateriaModal numero = {numero}/>
                </span>
            </div>   
            <Card.Body className="pt-0 pl-3 pr-3 pb-2">
                <CuatrimestreTable 
                    materias = {materias}/>
            </Card.Body>
        </Card>
    );
};

const CuatrimestreTable = (props)=>{
    const { materias } = props;
    
    return(
        <Table hover responsive className="m-0">
            <thead>
                <tr>
                <th>Codigo</th>
                <th>Materia</th>
                <th>Creditos</th>
                <th>Requisito</th>
                </tr>
            </thead>
            <tbody>
                {
                    materias.map((m,id)=>{
                        return(
                            <tr key={id}>                                
                                <td>{m.materia.codigo}</td>
                                <td>{m.materia.nombre}</td>
                                <td>{m.cantCreditos}</td>
                                <td>{m.prerequisito.codigo}</td>
                            </tr>
                        );
                    })
                }                        
            </tbody>
        </Table>
    );
};


const AddMateriaModal = (props)=>{      
    const [ show, setShow ] = useState(false);
    const { numero } = props;
    return (
    <>  
        
        <ButtonToolTip 
            esTitulo={true} 
            msg = "Añadir materia" 
            variant="outline-success"
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
                                    // value={ optionsCarreras.find((p)=>p.value.id === itemSelected.carrera.id)} 
                                    options={optionsCarreras} 
                                    // isDisabled = { esModoConsulta } 
                                    // onChange = { (o)=>onSelectChanged(o, "carrera")  }
                                    />
                            </Form.Group>
                        </Col>                        
                    </Row>
                    <Row>
                        <Col sm={7}>
                            <Form.Group controlId="formSelect">
                                <Form.Label>Requisito</Form.Label>
                                <Select 
                                    // value={ optionsCarreras.find((p)=>p.value.id === itemSelected.carrera.id)} 
                                    options={optionsCarreras} 
                                    // isDisabled = { esModoConsulta } 
                                    // onChange = { (o)=>onSelectChanged(o, "carrera")  }
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
                                // value={itemSelected.cantCiclos}
                                // onChange={(e)=>onTextChanged(e,"nombre")}
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

export default MaestroPensum;