import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function OrderConfirmation() {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Hook para traducción

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="singin">
            <div className="wrapper">
                <h1>{t('orderConfirmation.title')}</h1>
                <p>{t('orderConfirmation.successMessage')}</p>
                <p>{t('orderConfirmation.redirectMessage')}</p>
            </div>
        </div>
    );
}

export default OrderConfirmation;
