import React, { Component } from 'react';
import { Nav, NavDropdown, Collapse, Button, Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SubMenuLateral extends Component{
    constructor (prop){
        super(prop);
        this.state = {
            open: true
        };
    }
    
    render(){
        const { open } = this.state;
        const { title, icon } = this.props;
        
        return(
            <div>
                <Button
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variant="link"
                    block={true}
                    className="border-bottom border-top text-secondary"
                    size="lg">
                    <FontAwesomeIcon icon={icon} /> {title}
                </Button>
                
                <Collapse in={this.state.open} id="example-collapse-text">   
                    <div>
                        {this.props.children}                                                
                    </div>
                </Collapse>                                                 
            </div>
        );
      };
}


export default SubMenuLateral;