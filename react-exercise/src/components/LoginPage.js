import React from 'react';
import './LoginPage.css';

export function LoginPage() {
        return (
            <div id="login-page-container">
                <div id="login-container">
                    <form id="login-form" method="post">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="email" name="email"/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password"/>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        );
}