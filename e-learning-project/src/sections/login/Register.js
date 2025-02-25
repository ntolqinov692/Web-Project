// src/sections/login/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }

        // Save user data to localStorage
        const userData = { username, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Add username and password to login system
        const loginCredentials = { username, password };
        localStorage.setItem('loginCredentials', JSON.stringify(loginCredentials));

        // Redirect to login page
        navigate('/login');
    };

    return (
        <section id="login">
            <div className="login__container">
                <h2>Register</h2>
                <form className="login__form" onSubmit={handleRegister}>
                    <div className="form__group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form__group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login__btn">Register</button>
                </form>
                <p className="login__register">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </section>
    );
};

export default Register;