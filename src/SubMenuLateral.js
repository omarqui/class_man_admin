import React, { Component } from 'react';
import { Nav, NavDropdown, Collapse, Button, Card, ListGroup } from 'react-bootstrap';

class SubMenuLateral extends Component{
    constructor (prop){
        super(prop);
        this.state = {
            open: true
        };
    }
    
    render(){
        const { open } = this.state;
        const { title } = this.props;
        
        return(
            <div>
                <Button
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variant = "outline-light"
                    block={true}
                    className="rounded-0"
                    size="sm"
                >
                    {title}
                </Button>
                
                <Collapse in={this.state.open} id="example-collapse-text">   
                    <ListGroup defaultActiveKey="#link1" variant='flush'>
                        {this.props.children}
                    </ListGroup>                           
                </Collapse>                                                 
            </div>
        );
      };
}


export default SubMenuLateral;