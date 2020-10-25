import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth";
import './General.css';
import './LoginPage.css';

export function LoginPage() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin() {
        axios.post("https://localhost:44323/api/userapi/login", {
            email,
            password
        }).then(result => {
            if (result.status === 204) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

        return (
            <div id="login-page-container" className="page-container">
                <a href="/registration" className="upper-right-link">Registration</a>
                <div id="login-container" className="form-container">
                    <div id="login-form" method="post">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="email" name="email" required="required" value={email} onChange={e => {
                            setEmail(e.target.value);
                        }}/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" minLength="1" required="required" value={password} onChange={e => {
                            setPassword(e.target.value);
                        }}/>
                        <button onClick={postLogin}>Login</button>
                    </div>
                    { isError &&<div>Incorrect email or password!</div> }
                    <div id="products-link-container">
                        <a href="/products-page">Continue as guest</a>
                    </div>
                </div>
            </div>
        );
}