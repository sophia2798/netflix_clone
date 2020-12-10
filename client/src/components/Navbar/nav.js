import React, { useState, useEffect } from 'react';
import "./nav.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

function Navbar(props) {
    const [show, handleShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", function() {});
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            <div className="nav-right" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <img
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Profile Icon"
            />
            <ArrowDropDownIcon id="down-arrow" style={{color: 'white'}}/>
            </div>
            <div className="dropdown" style={dropdown ? {display:'block'} : {display:'none'}} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} >
                <ArrowDropUpIcon id="arrow-up" />
                <div className="dropdown-container">
                    <div className="dropdown-header">
                        <img
                            className="dropdown-avatar"
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                            alt="Profile Icon"
                        />
                        <p>{props.email}</p>
                    </div>
                    <hr id="dropdown-hr"/>
                    <p onClick={() => props.logout()} className="sign-out">Sign out of Netflix</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar


