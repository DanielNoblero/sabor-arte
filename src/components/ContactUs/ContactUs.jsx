import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
    };

    return (
        <div>
            <header className="header">
                <Link to="/" className="logo"><i className='bx bxs-bowl-hot'></i>Sabor&Arte</Link>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="icons">
                    <i className="bx bx-menu" id="menu-icon"></i>
                    <i className="bx bx-x" id="close-icon"></i>
                </label>
                <nav className="navbar">
                    <Link to="#" className="nav-item" style={{ '--i': 0 }}>Menú</Link>
                    <Link to="#" className="nav-item" style={{ '--i': 1 }}>Especialidades</Link>
                    <Link to="/login" className="nav-item" style={{ '--i': 2 }}>Iniciar sesión</Link>
                    <Link to="/signup" className="nav-item" style={{ '--i': 3 }}>Registrarse</Link>
                    <Link to="/contactus" className="nav-item" style={{ '--i': 4 }}>Contáctenos</Link>
                </nav>
            </header>
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
