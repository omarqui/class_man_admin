import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export const ButtonToolTip = props => {
    const { msg, variant, esTitulo, clickHandler, hidden, disabled } = props;
    const mClass = esTitulo ? "ml-1 mt-n3" : "", 
          mSize = esTitulo ? "sm" : "md" ;
    
    return (
    <span className="d-inline float-right">
        <OverlayTrigger 
            key="nuevo" 
            placement="top" 
            overlay={
                <Tooltip id={'tooltip-nuevo'}>
                    {msg}
                </Tooltip>}>
            <Button 
                hidden={hidden} 
                variant={variant} 
                size={mSize} 
                className={mClass} 
                onClick={clickHandler}
                disabled={disabled}>
                {props.children}
            </Button>
        </OverlayTrigger>
    </span>);
};
