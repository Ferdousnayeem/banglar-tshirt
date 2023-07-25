import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>{tshirt.name}
                    <button onClick={()=>handleRemoveFromCart(tshirt._id)}>x</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;

/* 
CONDITIONAL RENDERING
* 1.use if/else to set a variable that will contain an element, components
* 2.ternary: condition ? 'for true' : 'false'
 */