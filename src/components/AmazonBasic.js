import React from 'react';
import '../styles/AmazonBasic.css';


const AmazonBasic = ({ data }) => {
    return (
        <div className="amazonBasic">
            <div className="amazonBasic_wrapper">
                <div className="amazonBasic_left">
                    <h1>Sarlavha</h1>
                    <p>lorem ipsum dolor sit amet</p>
                </div>  
                <div className="amazonBasic_right">
                    {data.map((item) => {
                        return (
                            <div>
                                <button>Best Seller</button>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AmazonBasic
