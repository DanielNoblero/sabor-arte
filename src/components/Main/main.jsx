import React from 'react';
import '../css/index.css';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation(); // Hook para obtener traducciones

    return (
        <main>
            <div className="call">
                <h1>{t('companyName')}</h1> {/* Traducción dinámica para el nombre */}
                <p>{t('companyDescription')}</p> {/* Traducción dinámica para la descripción */}
            </div>
        </main>
    );
};

export default Main;