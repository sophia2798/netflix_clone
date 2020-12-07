import React from 'react';
import "./signin.css";

function signin() {
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
                    </div>
                </div>
            </section>
            <footer className="signin-footer">
                <div className="footer-content">

                </div>
            </footer>
        </div>
    )
}

export default signin
