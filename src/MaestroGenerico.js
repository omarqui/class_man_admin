import React, { Component } from 'react';
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PanelListaCompact from './PanelListaCompact';
import PanelDetalleCompact from './PanelDetalleCompact';
import estados from './constants';

const [ CREANDO, EDITANDO, CONSULTANDO ] = estados;

const datos = [
  {
    id: 1,
    descripcion: "Aula 404"
  },
  {
    id: 2,
    descripcion: "Aula 248"
  },
  {
    id: 3,
    descripcion: "Aula 782"
  }
];
let lastSelect = null;

class MaestroGenerico extends Component{
    constructor (prop){
        super(prop);
        this.state = {
          data: datos,
          selected: null,
          estado: CONSULTANDO
        };
        this.nuevo = this.nuevo.bind(this);
        this.editar = this.editar.bind(this);
        this.cancelar = this.cancelar.bind(this);
        this.guardar = this.guardar.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    seleccionarItem(item){      
      return () => {
        console.log(item);
        lastSelect = item;

        this.setState({
          selected: item,
          estado: CONSULTANDO
        });        
      };
    }

    nuevo(){
      const newItem = { id: null, descripcion: "" };      

      this.setState({
        selected: newItem,
        estado: CREANDO
      });     
    }

    editar(){
      this.setState({
        estado: EDITANDO
      });
    }

    cancelar(){
      this.setState({
        estado: CONSULTANDO,
        selected: lastSelect
      });
    }

    guardar(item){
      return ()=>{
        const newData = [ ...this.state.data ];
        if(this.state.estado === CREANDO)
          newData.push(item);
        else{
          const indice = newData.findIndex(i=>i.id === item.id);

          newData[indice] = item;
        }          
  
        this.setState({
          data: newData
        });        
        this.cancelar();
        this.seleccionarItem(item);        
      };      
    }

    onTextChanged(event, field){
        const newSeleted = {...this.state.selected, [field]: event.target.value};
        this.setState({
          selected: newSeleted
        });      
    }
     
    render(){
        const { data, selected, estado } = this.state;        
        
        return(
          <div className="main border rounded shadow-sm p-3 d-block panel">
            <h2 className="text-center mb-0">Manejo de aulas</h2>
            <h6 className="text-center mb-5">({estado[0].toUpperCase() + estado.substr(1).toLowerCase()})</h6>
            <Row>
              <Col xs={6} md={5} lg={4}>
                <PanelListaCompact titulo="Lista" nuevoHandler={this.nuevo} estado={estado}>                  
                  <ListGroup className="list_group" >
                    {data.map(i => {
                       return <ListGroup.Item 
                                  action href={"#link"+i.id} 
                                  onClick={this.seleccionarItem(i)}
                                  onDoubleClick={this.editar}
                                  disabled={estado !== CONSULTANDO}
                                  key={i.id}>
                                <p className="m-0"><strong>{i.descripcion}</strong></p>
                                <small >{i.id}</small>
                              </ListGroup.Item>;
                    })}                                        
                  </ListGroup>
                </PanelListaCompact>
              </Col>
              <Col>
                <PanelDetalleCompact titulo="Detalle" editarHandler={this.editar} estado={estado}>
                    {selected &&
                      <>
                        {selected.id && 
                          <Row>
                              <Col md={3}>
                                  <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Codigo</Form.Label>
                                      <Form.Control type="email" placeholder="Codigo" disabled value={selected.id} />
                                  </Form.Group>
                              </Col>
                          </Row>
                        }

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control 
                              type="Text" 
                              placeholder="Descripcion" 
                              disabled = {estado === CONSULTANDO} 
                              value={selected.descripcion}
                              onChange={(e)=>this.onTextChanged(e,"descripcion")}/>
                        </Form.Group>

                        <Button 
                            style={{float: "right"}} 
                            variant="primary" 
                            type="submit" 
                            className="ml-2"
                            disabled={ estado === CONSULTANDO }
                            onClick={this.guardar(selected)}>                   
                            <FontAwesomeIcon icon="save" /> Guardar
                        </Button>
                        <Button 
                            style={{float: "right"}} 
                            variant="danger" 
                            type="submit" 
                            hidden={ estado === CONSULTANDO }
                            onClick={this.cancelar}>                   
                            <FontAwesomeIcon icon="times" /> Cancelar
                        </Button>
                      </>
                    }
                </PanelDetalleCompact>
              </Col>
            </Row>
          </div>
        );
    }
}


export default MaestroGenerico;