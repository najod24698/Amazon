import React from 'react';
import '../styles/Category.css';
import {Link} from 'react-router-dom';

function Category({fourImages}) {
    return (
        <div className="category">
            {fourImages.map((image) => {
                return(
                    <Link>
                        <div className="image__wrapper">
                            <img src={image.image} alt="" />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Category
