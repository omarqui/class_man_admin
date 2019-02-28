import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonToolTip } from './ButtonToolTip';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import estados from './constants';

const [ CREANDO, EDITANDO, CONSULTANDO ] = estados;

class PanelListaCompact extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { titulo, nuevoHandler, estado } = this.props;
        const esModoConsulta = (estado === CONSULTANDO);

        return(
        <div className="border rounded p-3 sub_panel" minWidth = {200}>
            <div className="border-bottom">
                <h5 className="d-inline">{titulo}</h5>
                <ButtonToolTip 
                    hidden={!esModoConsulta} 
                    esTitulo={true} 
                    msg = "Nuevo" 
                    variant="outline-success" 
                    clickHandler={nuevoHandler}>
                    <FontAwesomeIcon icon="plus" />
                </ButtonToolTip>
            </div>
            <InputGroup className="mt-1 mb-3">
                <FormControl
                  placeholder="Buscar"
                  aria-label="Buscar"
                  aria-describedby="basic-addon2"
                  disabled = {!esModoConsulta}
                />
                <InputGroup.Append>
                    <ButtonToolTip 
                        disabled={!esModoConsulta} 
                        msg = "Buscar" 
                        className="p-0 m-0" 
                        variant="outline-primary">
                                <FontAwesomeIcon icon="search" />
                    </ButtonToolTip>
                </InputGroup.Append>
              </InputGroup>
              {this.props.children}
          </div>);
    }
}

export default PanelListaCompact;
