import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
import './Home.css'

const Home = () => {

    const tShirts = useLoaderData()
    // console.log(tShirts);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) => {
        // console.log(tShirt); 
        const exist = cart.find(ts => ts._id === tShirt._id);
        
        if (exist) {
            toast('You have already added this item.')
        } else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = (id) => {
        console.log(id);
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirts-container">
            {
            tShirts.map(tShirt => <TShirt
                key={tShirt._id}
                tShirt={tShirt}
                handleAddToCart={handleAddToCart}
            ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;

