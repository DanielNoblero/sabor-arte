import React from 'react';
import '../css/signin.css';

const SignUp = () => {
    const signup = (e) => {
        e.preventDefault();
        console.log("Registrarse");
    };

    return (
        <div className='singin'>
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
