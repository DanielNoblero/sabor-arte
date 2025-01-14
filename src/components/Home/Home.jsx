import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Cambia el idioma
    };

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => changeLanguage('en')}>English</button>
        </div>
    );
};

export default Home;