import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonToolTip } from './ButtonToolTip';

class PanelListaCompact extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { titulo } = this.props;

        return(
        <div className="border rounded p-3 sub_panel" minWidth = {200}>
            <div className="border-bottom">
                <h5 className="d-inline">{titulo}</h5>
                <ButtonToolTip msg = "Nuevo" variant="outline-success">
                    <FontAwesomeIcon icon="plus" />
                </ButtonToolTip>
            </div>
        </div>);
    }
}

export default PanelListaCompact;