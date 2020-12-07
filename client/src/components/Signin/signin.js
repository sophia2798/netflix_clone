import React from 'react';
import "./signin.css";

function Signin() {
    const [opacity, setOpacity] = React.useState(false);

    return (
        <div className="signin">
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
                        <h1>Sign In</h1>
                        <form className="signin-form">
                        <div className="input-container">
                                <div className="placement">
                                    <div className="controls">
                                        <label className="input-id">
                                            <input type="test" id="email" className="password"/>
                                            <label className="label1" htmlFor="email">Email or phone number</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="placement">
                                    <div className="controls">
                                        <label className="input-id">
                                            <input type="password" id="password" className="password"/>
                                            <label className="label1" htmlFor="password">Password</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="signin-btn" value="Sign In"/>
                        </form>
                        <div className="login-info">
                            <div className="login-info-content">
                                New to Netflix? &nbsp;
                                <a href="#" alt="sign up link">Sign up now</a>
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
                                    <option selected value = "/us-es/" data-language="es" data-country="US">Español</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Signin
