import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation() {
    const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);


        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='singin'>
        <div className="wrapper">
            <h1>Orden Creada</h1>
            <p>Su orden fue creada coreectamente</p>
            <p>Volviendo al menu principal</p>
        </div>
        </div>
    );
}

export default OrderConfirmation;
