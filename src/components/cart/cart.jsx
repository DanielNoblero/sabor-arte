import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContex';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify'; // Importar Toastify
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de Toastify

const Cart = () => {
    const { t } = useTranslation(); // Hook para traducción
    const { cart, emptyCart, addItem, removeItem } = useContext(CartContext); // Usar contexto
    const navigate = useNavigate();

    const getTotalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
    };

    const totalPrice = getTotalPrice();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const handleAddItem = (product) => {
        addItem({ ...product, quantity: 1 }); // Agregar un producto más
        toast.success(t('cart.toastAdded', { titulo: product.titulo })); // Notificación de agregado
    };

    const handleRemoveItem = (product) => {
        removeItem(product.id); // Quitar un producto
        toast.info(t('cart.toastRemoved', { titulo: product.titulo })); // Notificación de eliminado
    };

    return (
        <section className="container2">
            <div className="row2">
                <h1>{t('cart.title')}</h1>
                {cart.length > 0 ? (
                    cart.map((prod) => (
                        <div key={prod.id} className="cart-item">
                            <h3>{prod.titulo}</h3>
                            <p className="row-p2">${prod.precio}</p>
                            <p>{t('cart.quantity')}: {prod.quantity}</p>
                            <div className="cart-actions">
                                <button className="button2" onClick={() => handleAddItem(prod)}>
                                    {t('cart.addButton')}
                                </button>
                                <button className="button2" onClick={() => handleRemoveItem(prod)}>
                                    {t('cart.removeButton')}
                                </button>
                            </div>
                            <br />
                        </div>
                    ))
                ) : (
                    <p>{t('cart.emptyMessage')}</p>
                )}
                {cart.length > 0 && (
                    <>
                        <div className="total">
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
