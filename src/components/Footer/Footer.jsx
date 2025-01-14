import React from 'react';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Cambia el idioma
    };

    return (
        <footer>
            <p>{t('copyright')}</p>
            <div className="hora" id="hora-local"></div>
            <div className="redes">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="https://github.com/DanielNoblero/Portafolio.git" className="fab fa-github"></a>
            </div>
            <a href="html/contactus.html">{t('contact')}</a>
        </footer>
    );
}
