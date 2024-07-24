import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signin.css';

const SignIn = () => {
    const login = (e) => {
        e.preventDefault();
        console.log("Iniciar sesión");
    };

    return (
        <div className='singin'>
        <div className="wrapper">
            <form onSubmit={login}>
                <h1>Iniciar Sesión</h1>
                <div className="input-box">
                    <input type="text" placeholder="Usuario" id="Username" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña" id="Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recordarme</label>
                    <Link to="/forgotpsw">¿Olvidaste tu contraseña?</Link>
                </div>
                <button type="submit" className="btn" id="login">Entrar</button>
                <div className="registre-link">
                    <p>¿No tienes cuenta? <Link to="/signup">Regístrate</Link></p>
                </div>
            </form>
            <div className="registre-link">o inicia sesión con</div>
            <div className="socials">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-google-plus-g"></a>
            </div>
        </div>
        </div>
    );
};

export default SignIn;
