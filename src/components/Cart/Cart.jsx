import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {

    let message; 
    if (cart.length === 0) {
        message = <p>Please add some products.</p>
    } else {
        message = <p>Now you seems Boroloxxxxx!!</p>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red' }>Order Summary: {cart.length}</h2>

            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>

            {message}

            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>{tshirt.name}
                    <button onClick={()=>handleRemoveFromCart(tshirt._id)}>x</button>
                    </p>)
            }
            
            {cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span> }
            
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            
            {
                cart.length === 3 || <p>tinta to hoilo na</p>
            }

        </div>
    );
};

export default Cart;

/* 
CONDITIONAL RENDERING
* 1.use if/else to set a variable that will contain an element, compone
nts
* 2.ternary: condition ? 'for true' : 'false'
* 3. Logical && (if the condition is true then the next thing will be displayed)
* 4. Logical || (if the condition is false then the next thing will be displayed)
 */

 /* 
 CONDITIONAL CSS CLASS
 * 1. use ternary
 * 2. ternery inside template string
 */