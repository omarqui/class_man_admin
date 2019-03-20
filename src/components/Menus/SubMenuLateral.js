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
        const { title, icon, esMini } = this.props;        
        const flechaIcon = open? 'angle-up' : 'angle-down';

        return(
            <div className="submenu_lateral">
                <Button
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variant="link"
                    block={true}
                    className="text-left border-bottom border-top text-secondary"
                    size="lg">
                    <FontAwesomeIcon icon={icon} /> {title} 
                    <FontAwesomeIcon 
                        icon={flechaIcon} 
                        className="ml-4 pr-0 mr-0 d-inline  text-right"/>
                </Button>
                
                <Collapse in={this.state.open} id="example-collapse-text">   
                    <div className={esMini? "":"ml-4"}>
                        {this.props.children}                                                
                    </div>
                </Collapse>                                                 
            </div>
        );
      };
}


export default SubMenuLateral;