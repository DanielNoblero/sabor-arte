import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Autenticación';
import CartWidget from '../CartWidget/CartWidget';
import { useTranslation } from 'react-i18next';

function Nav() {
    const { t, i18n } = useTranslation(); // Hook para traducción
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            navigate('/'); // Redirige a la página principal después de cerrar sesión
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            setLoading(false);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                <i className="bx bxs-bowl-hot"></i>{t('companyName')}
            </Link>
            
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <i className="bx bx-menu" id="menu-icon"></i>
                <i className="bx bx-x" id="close-icon"></i>
            </label>
            
            <nav className="navbar">
                <Link to="/category/Entradas" className="nav-item">{t('starter')}</Link>
                <Link to="/category/Principal" className="nav-item">{t('mainDish')}</Link>
                <Link to="/category/Postre" className="nav-item">{t('desserts')}</Link>
                
                {user ? (
                    loading ? (
                        <span className="nav-item" style={{ '--i': 3 }}>{t('signingOut')}</span>
                    ) : showGreeting ? (
                        <span className="nav-item" style={{ '--i': 3 }}>{t('goodbye')}</span>
                    ) : (
                        <>
                            <Link to="/profile" className="nav-item" style={{ '--i': 3 }}>{t('myProfile')}</Link>
                            <Link onClick={handleSignOut} className="nav-item" style={{ '--i': 3 }}>{t('signOut')}</Link>
                        </>
                    )
                ) : (
                    <>
                        <Link to="/signin" className="nav-item" style={{ '--i': 3 }}>{t('signIn')}</Link>
                        <Link to="/signup" className="nav-item" style={{ '--i': 4 }}>{t('signUp')}</Link>
                    </>
                )}

                <div className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>
                        <i className="fa-solid fa-language"></i>
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <span onClick={() => changeLanguage('es')}>{t('Spanish')}</span>
                            <span onClick={() => changeLanguage('en')}>{t('English')}</span>
                        </div>
                    )}
                </div>
                
                <div className="cart-widget-container">
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
}

export default Nav;
