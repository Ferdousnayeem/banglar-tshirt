import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({gift, children, hasFriend}) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p>{children}</p>
            {hasFriend && <Friend gift={gift}></Friend>}
        </div>
    );
};

export default Cousin;