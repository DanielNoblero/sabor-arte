import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, collection, addDoc } from '../../service/firebase/index';
import { CartContext } from '../Context/CartContex';
import '../css/checkout.css';
import creditCardIcon from '../../assets/imagenes/credit-card.png';
import infoIcon from '../../assets/imagenes/info.png';

function PaymentForm() {
    const { cart, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        fullName: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
        address: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica que la fecha de expiración tenga el formato MM/YY
        const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expirationRegex.test(formData.expiration)) {
            alert('Expiration date must be in MM/YY format');
            return;
        }

        try {
            const order = {
                fullName: formData.fullName,
                cardNumber: formData.cardNumber,
                expiration: formData.expiration,
                cvv: formData.cvv,
                address: formData.address,
                email: formData.email,
                cartItems: cart,
                createdAt: new Date()
            };

            const docRef = await addDoc(collection(db, 'orders'), order);
            console.log('Order created with ID: ', docRef.id);

            clearCart();

            navigate('/order-confirmation');

            setTimeout(() => {
                navigate('/');
            }, 5000); 
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <div className='singin'>
            <div className="card">
                <div className="card__header">
                    <h1>Payment information</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="full-name">Full Name</label>
                        <input
                            className="full-name empty"
                            type="text"
                            id="fullName"
                            aria-label="Full Name"
                            placeholder="Nombre Completo"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="icon-group-container">
                        <label htmlFor="card-number">Card Number</label>
                        <div className="icon-group empty">
                            <input
                                type="text"
                                id="cardNumber"
                                aria-label="Card Number"
                                className="empty"
                                placeholder="1234 1234 1234 1234"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                            <img id="card-icon" src={creditCardIcon} height="14" width="14" alt="Card Icon" />
                        </div>
                    </div>

                    <div className="row-group">
                        <div className="form-group">
                            <label htmlFor="expiration">Expiration Date</label>
                            <input
                                className="expiration-input empty"
                                type="tel"
                                id="expiration"
                                minLength="5"
                                maxLength="5"
                                pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                                placeholder="MM/YY"
                                value={formData.expiration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="icon-group-container">
                            <label htmlFor="cvv">CVV</label>
                            <div className="icon-group empty">
                                <input
                                    className="cvv-input empty"
                                    type="tel"
                                    maxLength="3"
                                    placeholder="···"
                                    id="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                />
                                <img id="info-icon" src={infoIcon} height="14" width="14" alt="Info Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            className="empty"
                            aria-label="address"
                            placeholder="Av. Morelos 123"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="empty"
                            aria-label="email"
                            placeholder="mail@mail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" id="confirmPaymentButton" className="disabled">
                        Confirm payment
                    </button>
                </form>
                <div className="verify-info">
                    <small>Verify the information is correct</small>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;
