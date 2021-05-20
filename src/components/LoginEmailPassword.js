import React from 'react';
import { useState } from 'react';
import '../styles/LoginEmailPassword.css';
import amazonqora from '../assets/amazonqora.png';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';


function LoginEmail() {

    const [user, dispatch] = useStateValue({})

    const [dropped, setdropped] = useState(false);


    const dropdown = (e) => {
        const dropdownlinks = document.querySelector('.dropdownlinks');
        if (!dropped) {
            dropdownlinks.style.display = 'flex';
            setdropped(true);
        }
        else {
            dropdownlinks.style.display = 'none';
            setdropped(false)
        }
    }


    return (
        <div className="loginEmailPassword">
            <Link to="/"><img src={amazonqora} alt="" className="header_logo" alt="amazon" /></Link>
            <div className="loginContainer">
                <h1>Sign in</h1>
                <form action="#" id="form">
                    <label htmlFor="email">Email or mobile phone number</label>
                    <input type="email" id="email" />
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" />
                    <button type="submit" className="btn_continue">Continue</button>
                    <p>By continuing, you agree to Amazon's <Link>Conditions of  Use</Link> and <Link>Privacy Notice.</Link></p>
                    <div className="help">
                        {!dropped ? (<ArrowRightIcon className="dropicon"/>) : (<ArrowDropDownIcon className="dropicon"/>)}
                        <Link onClick={dropdown}>Need help?</Link> 
                    </div>
                    <div className="dropdownlinks">
                        <Link>Forgot your password?</Link>
                        <Link>Other issues with Sign-In</Link>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default LoginEmail
