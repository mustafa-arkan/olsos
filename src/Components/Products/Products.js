import React from 'react';

import './Products.css'

const Products = (props) => {
const{img,name,seller,ratings,price}=props.product
// destructraing

    return (
        <div className='products'>

            <img src={img} alt="" className="src" />
            
            <div className="products-info">
            <p className='products-name'>{name}</p>
            <p>Price:{price}$</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings}stars</small></p>
           </div>

            <button className='btn-cart'>
            <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Products;