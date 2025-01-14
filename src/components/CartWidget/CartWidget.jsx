import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../hooks/useCart";

function CardWidget() {
    const { totalQuantity } = useCart();

    return (
        <Link to="/cart" className="cart-widget">
    <i className="fa-solid fa-cart-shopping"></i> {/* Usando el icono directamente */}
    <span className="cart-count"></span> {totalQuantity}
</Link>
    );
}

export default CardWidget;

