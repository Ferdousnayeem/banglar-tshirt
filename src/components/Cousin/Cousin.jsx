import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children}) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p>{children}</p>
            <Friend></Friend>
        </div>
    );
};

export default Cousin;