import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const tShirts = useLoaderData()
    console.log(tShirts);

    return (
        <div>
            {tShirts.length}
        </div>
    );
};

export default Home;