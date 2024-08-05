import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Autenticación';
import CartWidget from '../CartWidget/CartWidget';

function Nav() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        if (!user && showGreeting) {
            const timer = setTimeout(() => {
                setShowGreeting(false);
                setLoading(false);
                navigate('/');
            }, 10000);
            return () => clearTimeout(timer);
        } else if (!user) {
            setLoading(false);
        }
    }, [user, showGreeting, navigate]);

    const handleSignOut = async () => {
        try {
            setLoading(true);
            await signOut();
            setShowGreeting(true);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            setLoading(false);
        }
    };

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
                {user ? (
                    loading ? (
                        <span className="nav-item" style={{ '--i': 3 }}>Cerrando sesión...</span>
                    ) : showGreeting ? (
                        <span className="nav-item" style={{ '--i': 3 }}>¡Hasta pronto!</span>
                    ) : (
                        <Link onClick={handleSignOut} className="nav-item" style={{ '--i': 3 }}>Cerrar sesión</Link>
                    )
                ) : (
                    <>
                        <Link to="/signin" className="nav-item" style={{ '--i': 3 }}>Iniciar sesión</Link>
                        <Link to="/signup" className="nav-item" style={{ '--i': 4 }}>Registrarse</Link>
                    </>
                )}
                <Link to="/contactus" className="nav-item" style={{ '--i': 5 }}>Contáctenos</Link>
                <CartWidget />
            </nav>
        </header>
    );
}

export default Nav;
