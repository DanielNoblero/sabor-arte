import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/signin.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../service/firebase';
import { useTranslation } from 'react-i18next'; // Hook para traducción

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation(); // Hook para traducción

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log(t('signin.success')); // Mensaje de éxito traducido
            navigate('/'); 
        } catch (error) {
            setError(t(`signin.errors.${error.code}`, { defaultValue: t('signin.errors.default') })); // Traducción de errores
            console.error(t('signin.errorLoggingIn'), error.code, error.message);
        }
    };

    return (
        <div className="signin">
            <div className="wrapper">
                <form onSubmit={handleSignIn}>
                    <h1>{t('signup.title')}</h1> {/* Título traducido */}
                    {error && <p className="error-message">{error}</p>}
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder={t('signup.emailPlaceholder')} 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder={t('signup.passwordPlaceholder')} 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            {t('signup.rememberMe')}
                        </label>
                        <Link to="/forgotpsw">{t('signup.forgotPassword')}</Link>
                    </div>
                    <button type="submit" className="btn">{t('signup.registerButton')}</button>
                    <div className="register-link">
                        <p>{t('signup.alreadyHaveAccount')} <Link to="/signin">{t('signup.signIn')}</Link></p>
                    </div>
                </form>
                <div className="register-link">{t('signup.orSignInWith')}</div>
                <div className="socials">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-google-plus-g"></a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
