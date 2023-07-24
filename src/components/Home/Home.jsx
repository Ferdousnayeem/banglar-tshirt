import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {

    const tShirts = useLoaderData()
    console.log(tShirts);

    return (
        <div className='home-container'>
            <div className="t-shirts-container">
            {
            tShirts.map(tShirt => <TShirt
                key={tShirt._id}
                tShirt={tShirt}
            ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;