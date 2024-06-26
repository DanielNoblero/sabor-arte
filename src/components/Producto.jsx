import React from 'react';

function Producto(props) {
    return (
        <div className='producto'>
            <h2>{props.titulo}</h2>
            <img src={props.img} alt={props.titulo} style={{ width: '300px' }} />
            <p>{props.descripcion}</p>
            <p>Precio: ${props.precio}</p>
        </div>
    );
}

export default Producto;
