import React from 'react';
import Item from './Item'
import '../styles/Product.css';

const Product = ({allBasketItems}) => {
    return (
        <div className="product_basket">
            {allBasketItems.map((basketItem) => {
                return(
                    <Item key={basketItem.id} id={basketItem.id} cost={basketItem.cost} title={basketItem.title} image={basketItem.image} />
                )
            })}
        </div>
    )
}

export default Product;