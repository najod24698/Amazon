import React from 'react';
import '../styles/Cart.css';
import Header from './Header';
import Nav_main from './Nav_main';
import { useStateValue } from '../StateProvider';
import CartItem from './CartItem';
import CurrencyFormat from 'react-currency-format';
import { getBasketSubtotal } from '../readucer';

const Cart = ({ allBasketItems }) => {

    const [basket, dispatch] = useStateValue();


    return (
        <div className="ChecCart">
            <Header />
            <Nav_main />
            <div className="ChecCart_wrapper">
                <div className="checcart1">

                </div>
                <div className="checcart2">
                    <div className="subtotal">
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <strong>Subtotal: </strong><span>{`${basket?.basket.length}`} items: </span>
                                    <strong>{`${value}`}</strong>
                                </>
                            )}
                            value={getBasketSubtotal(basket?.basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                    </div>
                    {/* <p><strong>Subtotal:</strong> 0 items $0</p> */}
                    <span><input type="checkbox" />This contains a gift</span>
                    <button type="submit">Learn More</button>
                </div>
            </div>
            {basket.basket.map((cartItems) => {
                return (
                    <div>
                        <CartItem key={cartItems.id} id={cartItems.id} image={cartItems.image} />
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;
