import React from 'react';

export function Footer() {
    return (
        <footer>
            <p>Todos los derechos reservados por copyright</p>
            <div className="hora" id="hora-local"></div>
            <div className="redes">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="https://github.com/DanielNoblero/Portafolio.git" className="fab fa-github"></a>
            </div>
            <a href="html/contactus.html">Contacto</a>
        </footer>
    );
}


export function Header() {
    return (
        <header className="header">
            <a href="index.html" className="logo"><i className='bx bxs-bowl-hot'></i>Sabor&Arte</a>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <i className="bx bx-menu" id="menu-icon"></i>
                <i className="bx bx-x" id="close-icon"></i>
            </label>
        </header>
    );
}