import "./style.css";
import React, { Component } from 'react';
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PanelListaCompact from './PanelListaCompact';
import PanelDetalleCompact from './PanelDetalleCompact';
import estados from '../../constants';
import { Maestro } from './Maestro';
const [ CREANDO, EDITANDO, CONSULTANDO ] = estados;


// let lastSelect = null;

class MaestroGenerico extends Component{
    constructor (prop){
        super(prop);
        
        this.state = {
          data: prop.data,
          selected: prop.data[0],
          estado: CONSULTANDO
        };

        this.nuevo = this.nuevo.bind(this);
        this.editar = this.editar.bind(this);
        this.cancelar = this.cancelar.bind(this);
        this.guardar = this.guardar.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.onSelectChanged = this.onSelectChanged.bind(this);
        this.buscar = this.buscar.bind(this);
    }

    seleccionarItem(item){  

      return () => {        
        this.setState((prevState, props)=>({
          selected: item,
          estado: CONSULTANDO,
          lastSelect: prevState.selected
        }));        
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
      this.setState((prevState,props)=>({
        estado: CONSULTANDO,
        selected: prevState.lastSelect
      }));
    }

    guardar(item){
      return ()=>{
        const newData = [ ...this.state.data ];
        if(this.state.estado === CREANDO){
          newData.push(item);
          this.props.data.push(item);
        }          
        else{
          const indice = newData.findIndex(i=>i.id === item.id);

          newData[indice] = item;
          this.props.data[indice] = item;
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

    onSelectChanged(optionSelected, field){
      const newSeleted = {...this.state.selected, [field]: optionSelected.value};
      this.setState({
        selected: newSeleted
      });  
    }
     
    render(){
        const { data, selected, estado } = this.state;        
        const { getListItem, titulo, getFormDetail } = this.props;
        
        return(
          <Maestro titulo={titulo} estado={estado} >
            <div className="maestro-container">
                <PanelListaCompact 
                    titulo="Lista" 
                    nuevoHandler={this.nuevo} 
                    estado={estado}
                    buscarHandler={this.buscar}>
                    <div 
                      className="panel-lista-compact">
                  <ListGroup 
                    className="border radius list_group" >
                    {data.map(i => {
                       return <ListGroup.Item 
                                  className={i ===selected ? "active" : ""}
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
                  </div>
                </PanelListaCompact>
                <PanelDetalleCompact titulo="Detalle" editarHandler={this.editar} estado={estado} isItemSelected={selected !== null}>
                    {
                      (selected || estado === CREANDO) &&
                        
                      getFormDetail(selected, this.onTextChanged, this.onSelectChanged, estado === CONSULTANDO)
                    }

                    <Button            
                        variant="primary"               
                        className="ml-2 button-float"
                        disabled={ estado === CONSULTANDO }
                        onClick={this.guardar(selected)}>                   
                        <FontAwesomeIcon icon="save" /> Guardar
                    </Button>
                    <Button 
                        className="button-float"
                        variant="danger"    
                        hidden={ estado === CONSULTANDO }
                        onClick={ this.cancelar }>                   
                        <FontAwesomeIcon icon="times" /> Cancelar
                    </Button> 
                </PanelDetalleCompact>
            </div>
          </Maestro>
        );
    }
}


export default MaestroGenerico;