import React from 'react';
import '../styles/Content.css';
import UpperProduct from './UpperProduct';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';
import Category from './Category';
import LanguageIcon from '@material-ui/icons/Language';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

function Content({ data, date, comfy }) {
    
    const contentImage4 = [
        {
            id: 1,
            title: "AmazonBasics",
            image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
        },

        {
            id: 2,
            title: "Shop by Category",
            image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
        },

        {
            id: 3,
            title: "Find your ideal TV",
            image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
        },
        {
            id: 4,
            title: "Find your ideal TV",
            image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
        },
    ]

    const [slide, setSlide] = useState(true)

    const slide_right = (e) => {
        const discover_icon = document.querySelector('.discover_icon');

        if (slide) {
            discover_icon.style.marginLeft = "-70px";
            setSlide(false)
        }
    }

    const slide_left = (e) => {
        const discover_icon = document.querySelector('.discover_icon');

        if (!slide) {
            discover_icon.style.marginLeft = "70px";
            setSlide(true)
        }
    }


    return (
        <div className="content">
            <div className="product_wrapper1">
                {data.map(everyProduct => {
                    return (
                        <Link to="/product">
                            <UpperProduct key={everyProduct.id} title={everyProduct.title} image={everyProduct.image} />
                        </Link>
                    )
                })}
            </div>

            <div className="product_wrapper2">
                {date.map(everyProduct => {
                    return (
                        <Link to="/product">
                            <UpperProduct key={everyProduct.id} title={everyProduct.title} image={everyProduct.image} />
                        </Link>
                    )
                })}
            </div>

            {/* discover */}
            <div className="discover">
                <h3>Discover Amazon</h3>
                <span><Link>Click to learn more</Link></span>
                <div className="discover_wrapper">
                    <div className="slide_left" onClick={slide_left}><ArrowBackIosIcon /></div>
                    <div className="discover_icon">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png" alt="" />
                    </div>
                    <div className="discover_icon">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg" alt="" />
                    </div>
                    <div className="discover_icon">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg" alt="" />
                    </div>
                    <div className="discover_icon">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg" alt="" />
                    </div>
                    <div className="discover_icon">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg" alt="" />
                    </div>
                    <div className="discover_icon">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg" alt="" />
                    </div>
                    <div className="slide_right" onClick={slide_right}><ArrowForwardIosIcon /></div>
                </div>
            </div>

            {/* product_wrapper3 */}
            <div className="product_wrapper3">
                <Category fourImages={contentImage4} />
                {comfy.map(everyProduct => {
                    return (
                        <Link to="/amazonBasics">
                            <UpperProduct key={everyProduct.id} title={everyProduct.title} image={everyProduct.image} />
                        </Link>
                    )
                })}
            </div>

            {/* recommendations */}
            <div className="recommendations">
                <div className="recommendations_chiziq"></div>
                <div className="recommendations_wrapper">
                    <button>Sign in to see personalized recommendations</button>
                </div>
            </div>

            {/* back_to_top */}
            <Link to="/">
                <div className="back_to_top">
                    <p>Back to top</p>
                </div>
            </Link>

            {/* careers */}
            <div className="careers">
                <div className="careers_wrapper">
                    <div className="get_to_know">
                        <h4>Get to Know Us</h4>
                        <p><Link>Careers</Link></p>
                        <p><Link>Blog</Link></p>
                        <p><Link>About Amazon</Link></p>
                        <p><Link>Investor Relations</Link></p>
                        <p><Link>Amazon Devices</Link></p>
                        <p><Link>Amazon Tours</Link></p>
                        <p><Link></Link></p>
                        <p><Link></Link></p>
                        <p><Link></Link></p>
                    </div>
                    <div className="make_money">
                        <h4>Make Money with Us</h4>
                        <p><Link>Sell products on Amazon</Link></p>
                        <p><Link>Sell on Amazon Business</Link></p>
                        <p><Link>Sell apps on Amazon</Link></p>
                        <p><Link>Become an Affiliate</Link></p>
                        <p><Link>Advertise Your Products</Link></p>
                        <p><Link>Self-Publish with Us</Link></p>
                        <p><Link>Host an Amazon Hub</Link></p>
                        <p><Link>›See More Make Money with Us</Link></p>
                    </div>

                    <div className="amazon_payment">
                        <h4>Amazon Payment Products</h4>
                        <p><Link>Amazon Business Card</Link></p>
                        <p><Link>Shop with Points</Link></p>
                        <p><Link>Reload Your Balance</Link></p>
                        <p><Link>Amazon Currency Converter</Link></p>
                    </div>

                    <div className="let_help_you">
                        <h4>Let Us Help You</h4>
                        <p><Link>Amazon and COVID-19</Link></p>
                        <p><Link>Your Account</Link></p>
                        <p><Link>Your Orders</Link></p>
                        <p><Link>Shipping Rates & Policies</Link></p>
                        <p><Link>Returns & Replacements</Link></p>
                        <p><Link>Manage Your Content and Devices</Link></p>
                        <p><Link>Amazon Assistant</Link></p>
                        <p><Link>Help</Link></p>
                    </div>
                </div>

                <div className="careers_footer">
                    <Link><img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon" /></Link>
                    <button><span><LanguageIcon /></span> English <UnfoldMoreIcon /></button>
                    <button>$ USD - U.S. Dollar</button>
                    <button><img className="careers_img" src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt="" /> United States</button>
                </div>

                <div className="footer">
                    <div className="footer_wrapper">
                        <ul>
                            <li>
                                <p>Amazon Music</p>
                                <span>Stream millionsof songs</span>
                            </li>
                            <li>
                                <p>Amazon Advertising</p>
                                <span>Find, attract, andengage customers</span>
                            </li>
                            <li>
                                <p>Amazon Drive</p>
                                <span>Cloud storagefrom Amazon</span>
                            </li>
                            <li>
                                <p>6pm</p>
                                <span>Score dealson fashion brand</span>
                            </li>
                            <li>
                                <p>	AbeBooks</p>
                                <span>Books, art& collectibles</span>
                            </li>
                            <li>
                                <p>ACX</p>
                                <span>Audiobook PublishingMade Easy</span>
                            </li>
                            <li>
                                <p>Alexa</p>
                                <span>Actionable Analyticsfor the Web</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;