import React from 'react';
import '../styles/Navmain.css';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import uzb_flag from '../assets/uzb_flag.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Navmain = () => {

    const [digital, setdigital] = useState(false);

    const digital_content = (e) => {

        const digitalContentevices = document.querySelector('.digitalContentevices');
        document.body.style.overflow = "hidden"

        if (!digital) {
            digitalContentevices.style.display = 'block';
            setdigital(true);
        }
    }

    const exitMenu = (e) => {
        const digitalContentevices = document.querySelector('.digitalContentevices');
        document.body.style.overflow = "scroll"

        if (digital) {
            digitalContentevices.style.display = 'none';
            setdigital(false);
        }
    }


    const [amazonmusic, setamazonmusuc] = useState(false);

    const amazonMusic = (e) => {

        const amazon_music = document.querySelector('.amazon_music');

        if (!amazonmusic) {
            amazon_music.style.display = 'block';
            setamazonmusuc(true);
        }
    }


    const MAIN_MENU = (e) => {
        const amazon_music = document.querySelector('.amazon_music');

        if (amazonMusic) {
            amazon_music.style.display = 'none';
            setamazonmusuc(false)
        }
    }


    const [All, setAll] = useState(false)

    const seeAll = (e) => {
        
        const seeAllwrapper = document.querySelector('.seeAllwrapper');
        
        if (!All) {
            seeAllwrapper.style.display = 'block';
            setAll(true);
        }

        else {
            seeAllwrapper.style.display = 'none';
            setAll(false)
        }
    }


    const shopingAll = (e) => {
        const ShopingAll = document.querySelector('.ShopingAll');

        if (!All) {
            ShopingAll.style.display = 'block';
            setAll(true);
        }
        else {
            ShopingAll.style.display = 'none';
            setAll(false);
        }
    }


    return (
        <div className="nav_main">
            <div className="nav">
                <ul className="main_ul1">
                    <li>
                        <div className="menu">
                            <Link onClick={digital_content}><MenuIcon />All</Link>
                        </div>
                    </li>
                    <li>Today's Deals</li>
                    <li>Customer Service</li>
                    <li>Gift Cards</li>
                    <li>Registry</li>
                    <li>Sell</li>
                </ul>
                <ul className="main_ul2">
                    <li>Amazon's response to COVID-19</li>
                </ul>
            </div>


            {/* digital_content */}

            <div className="digitalContentevices" >
                <div className="digital_content">
                    <Link to="/login">
                        <div className="hello_signin">
                            <AccountCircleIcon className="signin_icon" /> <h4>Hello, Sign in</h4>
                        </div>
                    </Link>
                    <div className="content_devices">
                        <div className="content_wrappper">
                            <li className="digital_li">
                                <ul className="digital_ul">
                                    <h4>Digital Content & Devices</h4>
                                    <li onClick={amazonMusic}>
                                        Amazon Music <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />

                                        <div className="amazon_music">
                                            <Link to="/login">
                                                <div className="hello_signin">
                                                    <AccountCircleIcon className="signin_icon" /> <h4>Hello, Sign in</h4>
                                                </div>
                                            </Link>
                                            <div className="amazon_music_wrapper">
                                                <Link className="aaa" to="/" onClick={MAIN_MENU}>
                                                    <div className="amazon_menu">
                                                        <ArrowBackIcon className="left_icon" />
                                                        <h5>MAIN MENU</h5>
                                                    </div>
                                                </Link>
                                                <div className="main_h4">
                                                    <h4>Stream Music</h4>
                                                </div>
                                                <Link to="/cart">
                                                    <div className="menu_li">
                                                        Amazon Music Unlimited
                                                    </div>
                                                </Link>
                                                <div className="menu_li">
                                                    Amazon Music HD
                                                </div>
                                                <div className="menu_li">
                                                    Amazon Music Prime
                                                </div>
                                                <div className="menu_li">
                                                    Free Streaming Music
                                                </div>
                                                <div className="menu_li">
                                                    Podcasts
                                                </div>
                                                <div className="menu_li">
                                                    Open Web Player
                                                </div>
                                                <div className="main_h4">
                                                    <h4>Buy Music</h4>
                                                </div>
                                                <div className="menu_li">
                                                    CDs & Vinyl
                                                </div>
                                                <div className="menu_li">
                                                    Download Store
                                                </div>
                                                <div className="menu_li">
                                                    Artist Merch Shop
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li>
                                        Kindle E-readers & Books <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li>
                                        Appstore for Android <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                </ul>


                                <ul className="digital_ul">
                                    <h4>Shop By Department</h4>
                                    <li>
                                        Electronics <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li>
                                        Computers <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li>
                                        Smart Home <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li>
                                        Arts & Crafts <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <ul className="seeAllwrapper">
                                        <li>Automotive</li>
                                        <li>Baby</li>
                                        <li>Beauty and personal care</li>
                                        <li>Women's Fashion</li>
                                        <li>Men's Fashion</li>
                                        <li>Girls' Fashion</li>
                                        <li>Boys' Fashion</li>
                                        <li>Health and Household</li>
                                        <li>Home and Kitchen</li>
                                        <li>Industrial and Scientific</li>
                                        <li>Luggage</li>
                                        <li>Movies & Television</li>
                                        <li>Pet supplies</li>
                                        <li>Software</li>
                                        <li>Sports and Outdoors</li>
                                        <li>Tools & Home Improvement</li>
                                        <li>Toys and Games</li>
                                        <li>Video Games</li>
                                    </ul>
                                    <li className="seeAll" onClick={seeAll}>
                                        See All {!All? (<KeyboardArrowDownIcon className="allicon" style={{ fontSize: "26px" }} />) : (<ExpandLessIcon className="allicon" />)}
                                    </li>
                                </ul>
                                
                                <ul className="digital_ul">
                                    <h4>Programs & Features</h4>
                                    <li>
                                        Gift Cards <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li>
                                        #FounditOnAmazon <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li>
                                        Amazon Live <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li>
                                        International Shoping <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    <li className="ShopingAll">
                                        Amazon Second Chaance <ArrowForwardIosIcon className="icon" style={{ fontSize: "16px" }} />
                                    </li>
                                    
                                    <li className="seeAll" onClick={shopingAll}>
                                        See All {!All? (<KeyboardArrowDownIcon className="allicon" style={{ fontSize: "26px" }} />) : (<ExpandLessIcon className="allicon" />)}
                                    </li>
                                </ul>

                                <ul className="help_ul">
                                    <h4>Help & Settings</h4>
                                    <li>
                                        Your Account
                                </li>
                                    <li>
                                        <LanguageIcon style={{ width: "20px" }} className="language" /> English
                                </li>
                                    <li>
                                        <img src={uzb_flag} alt="" style={{ width: "20px" }} className="uzb_flag" /> United States
                                </li>
                                    <li>
                                        Customer Service
                                </li>
                                    <li className="seeAll">
                                        Sign In
                                </li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="digital_content2" onClick={exitMenu} >
                    <CloseIcon className="signin_close" style={{fontSize: "40px"}} />
                </div>
            </div>
        </div>
    )
}

export default Navmain;
