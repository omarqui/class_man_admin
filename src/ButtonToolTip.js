import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export const ButtonToolTip = props => {
    const { msg, variant } = props;
    return (
    <span className="d-inline float-right">
        <OverlayTrigger key="nuevo" placement="top" overlay={
                                                            <Tooltip id={'tooltip-nuevo'}>
                                                                {msg}
                                                            </Tooltip>}>
            <Button variant={variant} size="sm" className="ml-1 mt-n3">
                {props.children}
            </Button>
        </OverlayTrigger>
    </span>);
};
