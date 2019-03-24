import React, { Component, useState } from 'react';
import { Form, Row, Col, Card, Button, Table, Modal, Container } from 'react-bootstrap';

const CuatrimestreTable = (props)=>{
    const { materias } = props;
    
    return(
        <Table hover responsive className="m-0">
            <thead>
                <tr>
                <th>Codigo</th>
                <th>Materia</th>
                <th>Creditos</th>
                <th>Requisito</th>
                </tr>
            </thead>
            <tbody>
                {
                    materias.map((m,id)=>{
                        return(
                            <tr key={id}>                                
                                <td>{m.materia.codigo}</td>
                                <td>{m.materia.nombre}</td>
                                <td>{m.cantCreditos}</td>
                                <td>{m.prerequisito.codigo}</td>
                            </tr>
                        );
                    })
                }                        
            </tbody>
        </Table>
    );
};

export default CuatrimestreTable;