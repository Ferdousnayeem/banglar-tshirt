import React from 'react';

const TShirt = ({tShirt}) => {

    const {picture, name, price} = tShirt;

    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default TShirt;