import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({gift}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin>Tom</Cousin>
                <Cousin gift={gift} hasFriend={true}>Toya</Cousin>
            </section>
        </div>
    );
};

export default Aunty;