import React, { useContext } from 'react';
import { SpecialRing } from '../Grandpa/Grandpa';

const Friend = ({gift}) => {

    const brassAntic = useContext(SpecialRing)

    return (
        <div>
            <h5>Friend</h5>
            <h6>{gift}</h6>
            <p>{brassAntic}</p>
        </div>
    );
};

export default Friend;