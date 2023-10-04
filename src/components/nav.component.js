import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='navbar navbar-expand navbar-light fixed-top'>
            <div className="container">
                <Link to='/' className="navbar-brand">Home</Link>
                <div className='collapse navbar-collapse justify-content-end'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-link'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' className='nav-link'>Sign up</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/forgot_password' className='nav-link'>Forgot Password</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
