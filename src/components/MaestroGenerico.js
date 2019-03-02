import React, { Component } from 'react';
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PanelListaCompact from './PanelListaCompact';
import PanelDetalleCompact from './PanelDetalleCompact';
import estados from '../constants';
import { Maestro } from './Maestro';

const [ CREANDO, EDITANDO, CONSULTANDO ] = estados;

let lastSelect = null;

class MaestroGenerico extends Component{
    constructor (prop){
        super(prop);
        
        this.state = {
          data: prop.data,
          selected: null,
          estado: CONSULTANDO
        };

        this.nuevo = this.nuevo.bind(this);
        this.editar = this.editar.bind(this);
        this.cancelar = this.cancelar.bind(this);
        this.guardar = this.guardar.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.buscar = this.buscar.bind(this);
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
      const newItem = this.props.getNewObject();      

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

    buscar(event){                  
      const busqueda = event.target.value.toLowerCase();
      const newData = this.props.data.filter(this.props.getFilterCondicion(busqueda));

      this.setState({
        data: newData
      });
    }

    onTextChanged(event, field){
        const newSeleted = {...this.state.selected, [field]: event.target.value};
        this.setState({
          selected: newSeleted
        });      
    }
     
    render(){
        const { data, selected, estado } = this.state;        
        const { getListItem, titulo, getFormDetail } = this.props;

        return(
          <Maestro titulo={titulo} estado={estado} >
            <Row>
              <Col xs={6} md={5} lg={4}>
                <PanelListaCompact 
                    titulo="Lista" 
                    nuevoHandler={this.nuevo} 
                    estado={estado}
                    buscarHandler={this.buscar}>
                  <ListGroup className="list_group" >
                    {data.map(i => {
                       return <ListGroup.Item 
                                  action href={"#link"+i.id} 
                                  onClick={this.seleccionarItem(i)}
                                  onDoubleClick={this.editar}
                                  disabled={estado !== CONSULTANDO}
                                  key={i.id}>
                                {
                                  getListItem(i)
                                }
                              </ListGroup.Item>;
                    })}                                        
                  </ListGroup>
                </PanelListaCompact>
              </Col>
              <Col>
                <PanelDetalleCompact titulo="Detalle" editarHandler={this.editar} estado={estado} isItemSelected={selected !== null}>
                    {
                      getFormDetail(selected, this.onTextChanged, this.guardar, this.cancelar, estado === CONSULTANDO)
                    }
                </PanelDetalleCompact>
              </Col>
            </Row>
          </Maestro>
        );
    }
}


export default MaestroGenerico;