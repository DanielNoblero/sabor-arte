import React from 'react';

function Footer() {
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

export default Footer;