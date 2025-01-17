import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/signin.css';

const ContactUs = () => {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(t("contactUs.formSubmitted")); // Agrega un mensaje traducido si lo deseas
    };

    return (
        <div className="signin">
            <div className="wrapper">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <h1>{t("contactUs.title")}</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder={t("contactUs.emailPlaceholder")}
                            id="email"
                            required
                        />
                        <i className="bx bx-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder={t("contactUs.subjectPlaceholder")}
                            id="asunto"
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="input-box">
                        <textarea
                            placeholder={t("contactUs.messagePlaceholder")}
                            id="mensaje"
                            required
                        ></textarea>
                        <i className="bx bxs-message-dots"></i>
                    </div>
                    <button type="submit" className="btn" id="send">
                        {t("contactUs.sendButton")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
