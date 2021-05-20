import React from 'react';
import '../styles/UpperProduct.css';
import {Link} from 'react-router-dom';

function UpperProduct({ title, image}) {
    return (
        <div className="upperproduct">
            <div className="card">
                <h2>{title}</h2>
                <div className="card-body">
                    <div className="item">
                        <img src={image} alt="" />
                        <Link><p>shop now</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperProduct
