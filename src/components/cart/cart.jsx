import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContex';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, emptyCart } = useContext(CartContext);

    const getTotalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
    };

    const totalPrice = getTotalPrice();

    return (
        <section className='container'>
            <div className='row2'>
                <h1>Carrito</h1>
                {cart.length > 0 ? (
                    cart.map((prod) => (
                        <div key={prod.id} className='cart-item'>
                            <h3>{prod.titulo}</h3>
                            <p className='row-p2'>${prod.precio}</p>
                            <p>Cantidad: {prod.quantity}</p>
                            <br />
                        </div>
                    ))
                ) : (
                    <p>El carrito está vacío</p>
                )}
                {cart.length > 0 && (
                    <>
                        <div className='total'>
                            <h3>Total: ${totalPrice}</h3>
                        </div>
                        <button className="button" onClick={emptyCart}>Vaciar Carrito</button>
                        <Link to='/Checkout'>
                            <button className="button">Pagar</button>
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
};

export default Cart;

