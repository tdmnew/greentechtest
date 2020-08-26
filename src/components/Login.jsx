import React, { useState } from 'react';

export default function Login() {

    const [ checked, setChecked ] = useState(false);

    return (
        <div className="login">
            <img src="https://green.cdn.energy/branding/logo-r.svg" className="login--logo" alt="green-logo"/>
            <h1>Example login screen</h1>
            <h2>Getting started with Green.</h2>
            <form className="login--form">
                <label className="login--email--label">Email Address</label>
                <input className="login--email--input" type="email" name="email" placeholder="Please enter your email address"/>
                <div className="login--remember" onClick={() => setChecked(!checked)}> 
                    <input className="login--remember--checkbox" type="checkbox" checked={checked} />
                    <label className="login--remember--label">Remember this device</label>
                </div>
                <button className="login--btn">Sign in</button>
            </form>
        </div>
    )
}
