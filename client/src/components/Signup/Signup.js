import React, { useState, useEffect } from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup(props) {
    const [opacity, setOpacity] = useState(false);

    return (
        <div className="signup">
            <div className="login-background">
            </div>
            <header className="signin-header">
                <div className="logo-container">
                    <img
                        className="logo-signin"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                        alt="Netflix Logo"
                    />
                </div>
            </header>
            <section className="login-body">
                <div style={{height: 660, width: 450}}>
                    <div className="signin-box">
                        <h1>Sign Up</h1>
                        <form className="signin-form" onSubmit={props.formSubmit}>
                        <div className="input-container">
                                <div className="placement">
                                    <div className="controls">
                                        <label className="input-id">
                                            <input onChange={props.inputChange} type="test" id="email" className={`email ${props.formState.email.length > 0 ? 'hasText' : null}`} name="email" value={props.formState.email}/>
                                            <label className="label1" htmlFor="email">Email or phone number</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="placement">
                                    <div className="controls">
                                        <label className="input-id">
                                            <input onChange={props.inputChange} type="password" id="password" className={`password ${props.formState.password.length > 0 ? 'hasText' : null}`} name="password" value={props.formState.password}/>
                                            <label className="label1" htmlFor="password">Password</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="signin-btn" value="Sign Up"/>
                        </form>
                        <p style={props.success ? {display:'block'} : {display:'none'} } id="success">Sign up successful! Use the link below to access the Sign In page and use your new account!</p>
                        <div className="login-info">
                            <div className="login-info-content">
                                Already have an account? &nbsp;
                                <Link to="/signin" alt="sign up link">Sign in now</Link>
                                <div className="terms">
                                <p><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;<button onClick={() => setOpacity(!opacity)} style={!opacity ? {opacity: '1'} : {opacity: '0'}} id="fake-learn">Learn more.</button></p>
                                </div>
                                <div className="disclosure" style={opacity ? {opacity: '1'} : {opacity: '0'}}>
                                    <span className="disclosure-text">
                                        The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" alt="policies link" className="disclosure-link">Privacy Policy</a> and <a href="https://policies.google.com/terms" alt="terms link" className="disclosure-link">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="signin-footer">
                <div className="footer-content">
                    <p className="footer-top">
                        Questions? Call 1-844-505-2993
                    </p>
                    <ul className="footer-links">
                        <li className="footer-link-item">
                            <a className="footer-link" href="#" alt="footer link">FAQ</a>
                        </li>
                        <li className="footer-link-item">
                            <a className="footer-link" href="#" alt="footer link">Help Center</a>
                        </li>
                        <li className="footer-link-item">
                            <a className="footer-link" href="#" alt="footer link">Terms of Use</a>
                        </li>
                        <li className="footer-link-item">
                            <a className="footer-link" href="#" alt="footer link">Privacy</a>
                        </li>
                        <li className="footer-link-item">
                            <a className="footer-link" href="#" alt="footer link">Cookie Preferences</a>
                        </li>
                        <li className="footer-link-item">
                            <a className="footer-link" href="#" alt="footer link">Corporate Information</a>
                        </li>
                    </ul>
                    <div className="lang-selection">
                        <div className="picker">
                            <div className="select">
                                <select className="lang-select">
                                    <option selected value = "/" data-language="en" data-country="US">English</option>
                                    <option value = "/us-es/" data-language="es" data-country="US">Español</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Signup
