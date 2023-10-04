import React, { useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const subject = "Password Reset Request";

    const handleSendEmail = () => {
        if (email) {
            window.location.href = `mailto:hayryy1203@gmail.com?subject=${subject}&body=${email}`;
        }
    };

    return (
        <form>
            <h3>Reset Password</h3>
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
            <div className="d-grid gap-2 col-12 mx-auto">
                <button 
                    className='btn btn-primary'
                    onClick={handleSendEmail}
                    disabled={!email}
                >
                    Click to Send an Email
                </button>
            </div>
        </form>
    );
}
