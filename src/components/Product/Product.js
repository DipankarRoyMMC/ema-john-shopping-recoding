import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <p className='price'>Price: ${price}</p>
                <p className='rating'>Rating: {ratings} stars</p>
                <p className='distrubutor'>Manufacturer: {seller}</p>
            </div>
            <button className='button-cart' onClick={() => handleAddToCart(product)}>
                <p className="cart-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product; <h2>this is product</h2>