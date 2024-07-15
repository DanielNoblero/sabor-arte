import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to="/cart" className="cart-widget">
            <i className="bx bxs-cart"></i>
            <span className="cart-count"></span> {/* Aquí puedes poner un contador de items en el carrito */}
        </Link>
    );
}

export default CartWidget;