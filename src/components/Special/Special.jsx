import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({gift}) => {

    const specialRing = useContext(RingContext)

    return (
        <div>
            <h5>Special</h5>
            <p>{gift}</p>
            <p>{specialRing}</p>
        </div>
    );
};

export default Special;