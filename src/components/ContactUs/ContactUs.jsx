import React from 'react';
import '../css/signin.css'

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
    };

    return (
        <div className='singin'>
            <div className="wrapper">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <h1>Contáctenos</h1>
                    <div className="input-box">
                        <input type="email" placeholder="Email" id="email" required />
                        <i className='bx bx-envelope'></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Asunto" id="asunto" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="input-box">
                        <textarea placeholder="Mensaje" id="mensaje" required></textarea>
                        <i className='bx bxs-message-dots'></i>
                    </div>
                    <button type="submit" className="btn" id="send">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
