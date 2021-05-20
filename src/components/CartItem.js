import React from 'react';
import {useStateValue} from '../StateProvider';

const CartItem = ({id, image, title, cost}) => {

    const [basket, dispatch] = useStateValue();
    const removeFromBasket = (e) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }


    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{cost}</p>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    )
}

export default CartItem
