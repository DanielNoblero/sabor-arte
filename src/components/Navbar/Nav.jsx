import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header className="header">
            <Link to="/" className="logo"><i className='bx bxs-bowl-hot'></i>Sabor&Arte</Link>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <i className="bx bx-menu" id="menu-icon"></i>
                <i className="bx bx-x" id="close-icon"></i>
            </label>
            <nav className="navbar">
                <Link to="/category/Entradas" className="nav-item" style={{ '--i': 0 }}>Entradas</Link>
                <Link to="/category/Principal" className="nav-item" style={{ '--i': 1 }}>Principal</Link>
                <Link to="/category/Postre" className="nav-item" style={{ '--i': 0 }}>Postres</Link>
                <a href="html/login.html" className="nav-item" style={{ '--i': 2 }}>Iniciar sesión</a>
                <a href="html/signup.html" className="nav-item" style={{ '--i': 3 }}>Registrarse</a>
                <a href="html/contactus.html" className="nav-item" style={{ '--i': 4 }}>Contactenos</a>
                <CartWidget />
            </nav>
        </header>
    );
}

export default Nav;
