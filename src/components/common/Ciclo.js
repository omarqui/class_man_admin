import React, { Component, useState } from 'react';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';
import CuatrimestreTable from "./CuatrimestreTable";
import AddMateriaModal from "./AddMateriaModal";

const Ciclo = (props)=>{
    const { numero, materias, materiasAll } = props;
    return(
        <Card className = "mb-3">
            <div className="mt-4 ml-3 mr-3 mb-0 border-bottom pb-3">
                <h5 className="d-inline" >Ciclo {numero}</h5>
                <span  className="ml-2">
                    <AddMateriaModal numero = {numero} materias={materiasAll}/>
                </span>
            </div>   
            <Card.Body className="pt-0 pl-3 pr-3 pb-2">
                <CuatrimestreTable 
                    materias = {materias}/>
            </Card.Body>
        </Card>
    );
};

export default Ciclo;