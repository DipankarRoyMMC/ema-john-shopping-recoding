import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * .10).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart">
            <h1>From Cart</h1>
            <h3>Order Summary: {cart.length}</h3>
            <p><strong>Total Price: ${total} </strong></p>
            <p><strong>Shipping: ${shipping}</strong></p>
            <p><strong>Tax: ${tax}</strong></p>
            <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart; <h1>Order Summary from Cart Component</h1>