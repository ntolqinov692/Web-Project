// src/sections/login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Get registered credentials from localStorage
        const loginCredentials = JSON.parse(localStorage.getItem('loginCredentials'));

        if (username === loginCredentials?.username && password === loginCredentials?.password) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/courses');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <section id="login">
            <div className="login__container">
                <h2>Login</h2>
                <form className="login__form" onSubmit={handleLogin}>
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
                    <button type="submit" className="login__btn">Login</button>
                </form>
                <p className="login__register">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </div>
        </section>
    );
};

export default Login;