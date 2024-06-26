import React from 'react';

function Nav() {
    return (
        <nav className="header">
            <a href="index.html" className="logo"><i className='bx bxs-bowl-hot'></i>Sabor&Arte</a>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <i className="bx bx-menu" id="menu-icon"></i>
                <i className="bx bx-x" id="close-icon"></i>
            </label>

            <a href="#" className="nav-item" style={{ '--i': 0 }}>Menú</a>
            <a href="#" className="nav-item" style={{ '--i': 1 }}>Menú</a>
            <a href="html/login.html" className="nav-item" style={{ '--i': 2 }}>Iniciar sesión</a>
            <a href="html/signup.html" className="nav-item" style={{ '--i': 3 }}>Registrarse</a>
            <a href="html/contactus.html" className="nav-item" style={{ '--i': 4 }}>Contactenos</a>
        </nav>
    );
}

export default Nav;
