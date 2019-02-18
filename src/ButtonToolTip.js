import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export const ButtonToolTip = props => {
    const { msg, variant, esTitulo } = props;
    const mClass = esTitulo ? "ml-1 mt-n3" : "",
	  mSize = esTitulo ? "sm" : "md" ;
    
    return (
    <span className="d-inline float-right">
        <OverlayTrigger key="nuevo" placement="top" overlay={
                                                            <Tooltip id={'tooltip-nuevo'}>
                                                                {msg}
                                                            </Tooltip>}>
            <Button variant={variant} size={mSize} className={mClass}>
                {props.children}
            </Button>
        </OverlayTrigger>
    </span>);
};
