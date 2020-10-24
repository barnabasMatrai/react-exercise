import React from 'react';
import './General.css';
import './LoginPage.css';

export function LoginPage() {
        return (
            <div id="login-page-container" className="page-container">
                <a href="/registration" id="registration-link">Registration</a>
                <div id="login-container" className="form-container">
                    <form id="login-form" method="post">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="email" name="email" required="required"/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" minLength="1" required="required"/>
                        <input type="submit" value="Login"/>
                    </form>
                    <div id="products-link-container">
                        <a href="/products">Continue as guest</a>
                    </div>
                </div>
            </div>
        );
}