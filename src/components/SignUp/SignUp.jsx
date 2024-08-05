import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/signin.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../service/firebase';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesión exitoso");
            navigate('/'); 
        } catch (error) {
            setError(error.message);
            console.error("Error al iniciar sesión:", error.code, error.message);
        }
    };

    return (
        <div className='signin'>
            <div className="wrapper">
                <form onSubmit={handleSignIn}>
                    <h1>Registrace</h1>
                    {error && <p className="error-message">{error}</p>}
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Correo electrónico" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Contraseña" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Recordarme</label>
                        <Link to="/forgotpsw">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <button type="submit" className="btn">Entrar</button>
                    <div className="register-link">
                        <p>¿No tienes cuenta? <Link to="/signup">Regístrate</Link></p>
                    </div>
                </form>
                <div className="register-link">o inicia sesión con</div>
                <div className="socials">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-google-plus-g"></a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;