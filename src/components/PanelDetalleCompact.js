
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonToolTip } from './ButtonToolTip';
import { Form, Button, Row, Col} from "react-bootstrap";
import estados from '../constants';
import PropTypes from 'prop-types';

const [ CREANDO, EDITANDO, CONSULTANDO ] = estados;

class PanelDetalleCompact extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { titulo, editarHandler, estado, isItemSelected } = this.props;
        
        return(
        <div className="border rounded p-3 h-100">
            <div className="border-bottom">
                <h5 className="d-inline">{titulo}</h5>
                <span  className="ml-2">
                    <ButtonToolTip hidden={estado !== EDITANDO} esTitulo={true} msg = "Eliminar" variant="outline-danger" className="ml-2">
                        <FontAwesomeIcon icon="trash" />
                    </ButtonToolTip>
                </span>
                
                <ButtonToolTip hidden={estado !== CONSULTANDO || !isItemSelected} esTitulo={true} msg = "Editar" variant="outline-warning" clickHandler = {editarHandler} >
                    <FontAwesomeIcon icon="pencil-alt" />
                </ButtonToolTip>
            </div>
            <Form className="mt-3">
                {this.props.children}
            </Form>
        </div>);
    }
}

PanelDetalleCompact.propTypes = {
    titulo: PropTypes.string,
    editarHandler: PropTypes.func,
    children: PropTypes.element,
    estado: PropTypes.number,
    isItemSelected: PropTypes.bool
};

export default PanelDetalleCompact;
