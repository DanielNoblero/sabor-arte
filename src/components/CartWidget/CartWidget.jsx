import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to="/cart" className="cart-widget">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count"></span> {/* Aquí puedes poner un contador de items en el carrito */}
        </Link>
    );
}

export default CartWidget;