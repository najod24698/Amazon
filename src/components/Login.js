import React from 'react';
import '../styles/Login.css';
import {auth, provider} from '../firebase';

function Login() {

    const sign_in = () => {
        auth.signInWithPopup(provider) 
        .then(user => console.log(user))
        .catch(err => console.log(err.massage))
    }

    return (
        <div className="login">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt=""/>
            <p>Buy your poducts in low price in Amazon.com Co-founder: jeff Bezos</p>
            <button className="sign_in" onClick={sign_in}>Sign in</button>
        </div>
    )
}

export default Login;
