import React from 'react';
import Special from '../Special/Special';

const MySelf = ({gift}) => {
    return (
        <div>
            <h4>Myself</h4>
            <Special gift={gift}></Special>
        </div>
    );
};

export default MySelf; 