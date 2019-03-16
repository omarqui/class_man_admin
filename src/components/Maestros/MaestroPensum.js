import React, { Component } from 'react';
import MaestroGenerico from '../MaestroGenerico/MaestroGenerico';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import Select from 'react-select';

const optionsCarreras = [
    { 
        value: {
            id: 1,
            codigo: "ab2356",
            nombre: "Ingles 1",
            cantCreditos: 3,
            UrlProgramaClase: ""
        }, 
        label: 'Ing. Sistema y Computo' 
    },
    { 
        value: {
            id: 2,
            codigo: "789456",
            nombre: "Introduccion Programacion",
            cantCreditos: 4,
            urlProgramaClase: ""
        }, 
        label: 'Educacion Matematica' 
    },
    { 
        value: {
            id: 3,
            codigo: "12346",      
            nombre: "Prueba",
            cantCreditos: 2,
            urlProgramaClase: ""
        }, 
        label: 'Mercadeo' 
    }
  ];

const datos = [
    {
      id: 1,
      carrera: {
        id: 1,
        nombre: "Ing. Sistema y Computo",
        idProfesorGuia: 1
      },
      cantCiclos: 12,
      nota: "version 1",
      ciclos:[
          {
              posicion: 1,
              materias:[
                  {
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
                    cantCreditos: 4
                  },
                  {
                    materia: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 3
                  },
                  {
                    materia: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 4
                  }
              ]
          },
          {
            posicion: 2,
            materias:[
                  {
                    materia: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 3
                  },
                  {
                    materia: {
                        id: 3,
                        codigo: "12346",      
                        nombre: "Prueba",
                        cantCreditos: 2,
                        urlProgramaClase: ""
                    },
                    prerequisito: {
                        id: 2,
                        codigo: "789456",
                        nombre: "Introduccion Programacion",
                        cantCreditos: 4,
                        urlProgramaClase: ""
                    },
                    cantCreditos: 4
                  }
            ]
        }
      ]
    },
    {
        id: 2,
        carrera: {
            id: 2,
            nombre: "Educacion Matematica",
            idProfesorGuia: 1
        },
        cantCiclos: 10,
        nota: "",
        ciclos:[
            {
                posicion: 1,
                materias:[        
                    {
                        materia: {
                            id: 3,
                            codigo: "12346",      
                            nombre: "Prueba",
                            cantCreditos: 2,
                            urlProgramaClase: ""
                        },
                        prerequisito: {
                            id: 2,
                            codigo: "789456",
                            nombre: "Introduccion Programacion",
                            cantCreditos: 4,
                            urlProgramaClase: ""
                        },
                        cantCreditos: 4
                    }
                ]
            }
        ]
      }
  ];

class MaestroPensum extends Component{
    constructor(props){
        super(props);        
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

                <Card>
                    <Card.Header>Ciclos 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>;
              </div>
        );
    }

    render(){
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

export default MaestroPensum;