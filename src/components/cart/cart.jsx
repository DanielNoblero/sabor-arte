import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContex';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cart = () => {
    const { t } = useTranslation(); // Hook para traducción
    const { cart, emptyCart } = useContext(CartContext);
    const navigate = useNavigate();

    const getTotalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
    };

    const totalPrice = getTotalPrice();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <section className='container2'>
            <div className='row2'>
                <h1>{t('cart.title')}</h1>
                {cart.length > 0 ? (
                    cart.map((prod) => (
                        <div key={prod.id} className='cart-item'>
                            <h3>{prod.titulo}</h3>
                            <p className='row-p2'>${prod.precio}</p>
                            <p>{t('cart.quantity')}: {prod.quantity}</p>
                            <br />
                        </div>
                    ))
                ) : (
                    <p>{t('cart.emptyMessage')}</p>
                )}
                {cart.length > 0 && (
                    <>
                        <div className='total'>
                            <h3>{t('cart.total')}: ${totalPrice}</h3>
                        </div>
                        <button className="button" onClick={emptyCart}>
                            {t('cart.emptyCartButton')}
                        </button>
                        <button className="button" onClick={handleCheckout}>
                            {t('cart.checkoutButton')}
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};

export default Cart;
