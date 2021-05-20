import React from 'react';
import { useState } from 'react';
import '../styles/Header.css';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchIcon from '@material-ui/icons/Search';
import lang from '../assets/us.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import cart from '../assets/cart.svg';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import {useStateValue} from '../StateProvider';

function Header() {

    const [basket, dispatch] = useStateValue();
    console.log(basket);

    const [showup, setshowup] = useState(false);

    const createline = (e) => {
        if (!showup) {
            e.target.parentElement.classList.add("createline");
            setshowup(true);
        }
        else {
            e.target.parentElement.classList.remove("createline");
            setshowup(false);
        }
    }


    const showTheLangaugeBar = (e) => {
        const langaugeBar = document.querySelector('.langauge_bar');

        if (!showup) {
            langaugeBar.classList.add('active')
            setshowup(true)
        }
    }



    const hideTheLangaugeBar = (e) => {
        const langaugeBar = document.querySelector('.langauge_bar');
        if (showup) {
            langaugeBar.classList.remove("active");
            setshowup(false);
        } else {
            console.log("done");
        }
    }



    const [signin, setsignin] = useState(false);

    const showHelloSignin = (e) => {
        // const sign_in_out = document.querySelector('.sign_in_out');
        const hello_signIn = document.querySelector('.hello_signIn');

        if (!signin) {
            // sign_in_out.classList.add("aaaaaa");
            hello_signIn.style.display = 'block';
            setsignin(true);
        }
    }

    const hideHelloSignin = (e) => {
        // const sign_in_out = document.querySelector('.sign_in_out');
        const hello_signIn = document.querySelector('.hello_signIn');

        if (signin) {
            // sign_in_out.classList.remove('helloSignInHover');
            hello_signIn.style.display = 'none';
            setsignin(false);
        }
    }


    return (
        <div className="header">
            <Link to="/">
                <div className="header__logo">
                    <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon" />
                </div>
            </Link>
            <div className="delivery">
                <RoomOutlinedIcon />
                <div className="deliver">
                    <span>Delivery to</span>
                    <h2>Uzbekistan</h2>
                </div>
            </div>
            <div className="search_bar">
                <select id="category">
                    <option value="all">All</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Smartphones">Smartphones</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Watches">Watches</option>
                </select>
                <input type="search" placeholder="Search" id="search" onClick={createline} />
                <div className="search_icon">
                    <SearchIcon />
                </div>
            </div>
            <div className="account">
                <div className="langauga" onMouseEnter={showTheLangaugeBar} onMouseLeave={hideTheLangaugeBar}>
                    <img src={lang} alt="" className="lang_img" />
                    <ArrowDropDownIcon className="sign_icon" />
                    <div className="langauge_bar">
                        <span>Change language <Link className="langauge_barLink">Learn more</Link></span>
                        <ul>
                            <li className="english">
                                <input type="radio" name="language" />
                                <Link>English - EN</Link>
                            </li>
                            <hr className="language_border" />
                            <li>
                                <input type="radio" name="language" />
                                <Link>Español - ES</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link>简体中文 - ZH</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link> Deutsch - DE</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link>Português - PT</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link>繁體中文 - ZH</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link>Korean-EN</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link>עברית - HE</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link>اللغة العربية - AR</Link>
                            </li>
                            <li>
                                <input type="radio" name="language" />
                                <Link>עברית - HE</Link>
                            </li>
                            <hr className="language_border" />
                            <span>Change currency<Link className="langauge_barLink">Learn more</Link></span>
                            <p>$ - USD - U.S. Dollar <Link>Change</Link></p>
                            <hr className="language_border" />
                            <div className="langauge_bar_image">
                                <img src={lang} alt="" />
                                You are shopping on
                            </div>
                            <p>Amazon.com.</p>
                            <p className="👌p"><Link>Change country/region.</Link></p>
                        </ul>
                    </div>
                </div>
                <Link to="/login">
                    <div className="sign_in_out" onMouseEnter={showHelloSignin} onMouseLeave={hideHelloSignin}>
                        <div className="sign">
                            <span>Hello, sign in</span>
                            <h4>Account&Lists</h4>
                        </div>
                        <ArrowDropDownIcon className="sign_icon" />
                        <div className="hello_signIn">
                            <div className="btn_group">
                                <button>Sign In</button>
                                <span>New customer? <Link>Start here.</Link></span>
                            </div>
                            <div className="hello_signIn_wrapper">
                                <div className="your_list">
                                    <h4>Your List</h4>
                                    <p><Link>Create a List</Link></p>
                                    <p><Link>Find a List or Registry</Link></p>
                                    <p><Link>AmazonSmile Charity Lists</Link></p>
                                </div>
                                <div className="your_account">
                                    <h4>Your Account</h4>
                                    <p><Link>Account</Link></p>
                                    <p><Link>Orders</Link></p>
                                    <p><Link>Recommendations</Link></p>
                                    <p><Link>Browsing History</Link></p>
                                    <p><Link>Watchlist</Link></p>
                                    <p><Link>Video Purchases & Rentals</Link></p>
                                    <p><Link>Kindle Unlimited</Link></p>
                                    <p><Link>Content & Devices</Link></p>
                                    <p><Link>Subscribe & Save Items</Link></p>
                                    <p><Link>Memberships & Subscriptions</Link></p>
                                    <p><Link>Music Library</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="orders">
                    <span>Return</span>
                    <h4>&Orders</h4>
                </div>
                <Link to="/cart">
                    <div className="cart">
                        <div className="counter">{basket.basket?.length}</div>
                        <img src={cart} alt="" id="image_order" />
                        <h4>Cart</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;