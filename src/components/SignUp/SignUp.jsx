import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signin.css';

const SignUp = () => {
    const signup = (e) => {
        e.preventDefault();
        console.log("Registrarse");
    };

    return (
        <div>
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
                    <Link to="#" className="nav-item" style={{ '--i': 0 }}>Menú</Link>
                    <Link to="#" className="nav-item" style={{ '--i': 1 }}>Especialidades</Link>
                    <Link to="/login" className="nav-item" style={{ '--i': 2 }}>Iniciar sesión</Link>
                    <Link to="/signup" className="nav-item" style={{ '--i': 3 }}>Registrarse</Link>
                    <Link to="/contactus" className="nav-item" style={{ '--i': 4 }}>Contáctenos</Link>
                </nav>
            </header>
            <div className="wrapper">
                <form onSubmit={signup}>
                    <h1>Registro</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Usuario" id="username" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Contraseña" id="password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <button type="submit" className="btn" id="register">Registrarse</button>
                    <div className="registre-link">
                        <p>O registrarse con</p>
                    </div>
                </form>
                <div className="socials">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-google-plus-g"></a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
