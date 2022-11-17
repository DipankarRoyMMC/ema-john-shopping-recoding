import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className="cart">
            <h1>From Cart</h1>
            <h3>Order Summary: {cart.length}</h3>
        </div>
    );
};

export default Cart; <h1>Order Summary from Cart Component</h1>