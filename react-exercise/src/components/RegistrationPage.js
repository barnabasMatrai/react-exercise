import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth";
import './General.css';
import './RegistrationPage.css';

export function RegistrationPage() {
    const [isRegistered, setRegistered] = useState(false);
    const [isError, setIsError] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const { setAuthTokens } = useAuth();

    function postRegister() {
        axios.post("https://localhost:44323/api/userapi", {
            name,
            email,
            password,
            address
        }).then(result => {
            if (result.status === 201) {
                setAuthTokens(result.data);
                setRegistered(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isRegistered) {
        return <Redirect to="/products-page" />;
    }

    return (
        <div id="registration-page-container" className="page-container">
            <a href="/login" className="upper-right-link">Back to login page</a>
            <div id="registration-container" className="form-container">
                <div id="registration-form" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required="required" value={name} onChange={e => {
                        setName(e.target.value);
                    }}/>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" name="email" required="required" value={email} onChange={e => {
                        setEmail(e.target.value);
                    }}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" minLength="1" required="required" value={password} onChange={e => {
                        setPassword(e.target.value);
                    }}/>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={address} onChange={e => {
                        setAddress(e.target.value);
                    }}/>
                    <button onClick={postRegister}>Register</button>
                </div>
            </div>
        </div>
    );
}