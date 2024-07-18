import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <i className='bx bxs-bowl-hot'></i>Sabor&Arte
            </Link>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <i className="bx bx-menu" id="menu-icon"></i>
                <i className="bx bx-x" id="close-icon"></i>
            </label>
            <nav className="navbar">
                <Link to="/category/Entradas" className="nav-item" style={{ '--i': 0 }}>Entradas</Link>
                <Link to="/category/Principal" className="nav-item" style={{ '--i': 1 }}>Principal</Link>
                <Link to="/category/Postre" className="nav-item" style={{ '--i': 2 }}>Postres</Link>
                <Link to="/signin" className="nav-item" style={{ '--i': 3 }}>Iniciar sesión</Link>
                <Link to="/signup" className="nav-item" style={{ '--i': 4 }}>Registrarse</Link>
                <Link to="/contactus" className="nav-item" style={{ '--i': 5 }}>Contactenos</Link>
                <CartWidget />
            </nav>
        </header>
    );
}

export default Nav;

