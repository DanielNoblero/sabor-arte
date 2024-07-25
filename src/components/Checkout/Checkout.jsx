import React from 'react'
import '../css/checkout.css';
import creditCardIcon from '../../assets/imagenes/credit-card.png';
import infoIcon from '../../assets/imagenes/info.png'

function PaymentForm() {
    return (
        <div className='singin'>
        <div className="card">
            <div className="card__header">
                <h1>Payment information</h1>
            </div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input
                        className="full-name empty"
                        type="text"
                        id="full-name"
                        aria-label="Full Name"
                        placeholder="Nombre Completo"
                        required
                    />
                </div>

                <div className="icon-group-container">
                    <label htmlFor="card-number">Card Number</label>
                    <div className="icon-group empty">
                        <input
                            type="text"
                            id="card-number"
                            aria-label="Card Number"
                            className="empty"
                            placeholder="1234 1234 1234 1234"
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
                            pattern="/{5}/"
                            placeholder="MM/YY"
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
                        required
                    />
                </div>
                <button type="submit" id="confirmPaymentButton" className="disabled" disabled>
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
