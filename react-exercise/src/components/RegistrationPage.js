import React from 'react';
import './General.css';
import './RegistrationPage.css';

export function RegistrationPage() {
    return (
        <div id="registration-page-container" className="page-container">
            <div id="registration-container" className="form-container">
                <form id="registration-form" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required="required"/>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" name="email" required="required"/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" minLength="1" required="required"/>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address"/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        </div>
    );
}