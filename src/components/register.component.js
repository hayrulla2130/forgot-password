import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: confirmPassword
        };
        
        console.log(data);
        
        // Uncomment the axios call when you are ready to test with the actual API
        // axios.post('http://apiUrl/register', data)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className='form-group'>
                <label>First Name</label>
                <input type='text' className='form-control' placeholder='First Name' 
                    value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Last Name</label>
                <input type='text' className='form-control' placeholder='Last Name'
                    value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' placeholder='Email' 
                    value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' placeholder='Password' 
                    value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Confirm Password</label>
                <input type='password' className='form-control' placeholder='Confirm Password' 
                    value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>
        </form>
    );
}
