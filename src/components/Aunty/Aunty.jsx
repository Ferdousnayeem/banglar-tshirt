import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin>Tom</Cousin>
                <Cousin>Toya</Cousin>
            </section>
        </div>
    );
};

export default Aunty;