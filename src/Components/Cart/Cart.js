import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart}=props

    let total=0
    let shippingCost=0
    for(const cost of cart){


total=total+cost.price
shippingCost=shippingCost+cost.shipping

    }
    const tax=parseFloat((total*0.1).toFixed(2))
    const grandTotal=total+shippingCost+tax



    return (
        <div className='cart'>
            <h4>Order Summery</h4>
<p>Selected item: {cart.length}</p>
<p>Total Price:${total}  </p>
<p>Total Shipping:${shippingCost} </p>
<p>Tax:${tax} </p>
<h4>Grand Total: ${grandTotal.toFixed(2)} </h4>

        </div>
    );
};

export default Cart;