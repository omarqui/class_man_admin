import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonToolTip } from './ButtonToolTip';

class PanelDetalleCompact extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { titulo } = this.props;

        return(
        <div className="border rounded p-3 h-100">
            <div className="border-bottom">
                <h5 className="d-inline">{titulo}</h5>
                <span  className="ml-2">
                    <ButtonToolTip msg = "Eliminar" variant="outline-danger" className="ml-2">
                        <FontAwesomeIcon icon="trash" />
                    </ButtonToolTip>
                </span>
                
                <ButtonToolTip msg = "Editar" variant="outline-warning">
                    <FontAwesomeIcon icon="pencil-alt" />
                </ButtonToolTip>
            </div>
        </div>);
    }
}

export default PanelDetalleCompact;