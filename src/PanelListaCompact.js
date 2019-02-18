import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonToolTip } from './ButtonToolTip';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

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
                <ButtonToolTip esTitulo={true} msg = "Nuevo" variant="outline-success">
                    <FontAwesomeIcon icon="plus" />
                </ButtonToolTip>
            </div>
		  <InputGroup className="mt-1 mb-3">
		    <FormControl
		      placeholder="Buscar"
		      aria-label="Buscar"
		      aria-describedby="basic-addon2"
		    />
		    <InputGroup.Append>
			<ButtonToolTip msg = "Buscar" className="p-0 m-0" variant="outline-primary">
	                    <FontAwesomeIcon icon="search" />
	                </ButtonToolTip>
		    </InputGroup.Append>
		  </InputGroup>
		  <ListGroup className="list_group" defaultActiveKey="#link1">
		    <ListGroup.Item action href="#link1">
		      <p className="m-0"><strong>Aula 424</strong></p>
		      <small >0001</small>
		    </ListGroup.Item>
		    <ListGroup.Item action href="#link2">
		      <p className="m-0"><strong>Aula 424</strong></p>
		      <small >0001</small>
		    </ListGroup.Item>
		    <ListGroup.Item action href="#link3">
	              <p className="m-0"><strong>Aula 424</strong></p>
	              <small >0001</small>
		    </ListGroup.Item>
                    <ListGroup.Item action href="#link4">
                      <p className="m-0"><strong>Aula 424</strong></p>
                      <small >0001</small>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link5">
                      <p className="m-0"><strong>Aula 424</strong></p>
                      <small >0001</small>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link6">
                      <p className="m-0"><strong>Aula 424</strong></p>
                      <small >0001</small>
                    </ListGroup.Item>
		  </ListGroup>
          </div>);
    }
}

export default PanelListaCompact;
