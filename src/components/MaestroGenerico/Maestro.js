import React from 'react';

export const Maestro = props => {
    const { children, estado, titulo } = props;
    
    return(
        <div className="main border rounded shadow-sm p-3 d-block panel">
            <h2 className="text-center mb-0 mt-3">
                Maestro de {titulo}
            </h2>
            <h6 className="text-center mb-3">
                ({estado[0].toUpperCase() + estado.substr(1).toLowerCase()})
            </h6>
            {children}
        </div>
    );
};