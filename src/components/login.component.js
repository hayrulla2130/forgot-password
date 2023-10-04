import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // Here, you would typically send the email and password to your server to log the user in
        // For now, we'll just prevent the default form submission behavior
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className='form-group'>
                <label>Email</label>
                <input 
                    type='email' 
                    className='form-control' 
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input 
                    type='password' 
                    className='form-control' 
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto d-flex justify-content-end">
                <Link to='/forgot_password' className='nav-link'>Forgot Password</Link>
            </div>
        </form>
    );
}

export default Login;
