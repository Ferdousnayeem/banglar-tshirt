import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext();

export const SpecialRing = createContext();

const Grandpa = () => {

    const gift = "Diamond Ring";

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <SpecialRing.Provider value='Brass Antic Piece'>
            <RingContext.Provider value='Golden Ring'>
                <section className='flex'>
                    <Father gift={gift}></Father>
                    <Uncle></Uncle>
                    <Aunty gift={gift}></Aunty>
                </section>
            </RingContext.Provider>
            </SpecialRing.Provider>
        </div>
    );
};

export default Grandpa;

/* 
* 1. Create context and export
* 2. create a provider and pass a value
* 3. use useContext to receive a value
*/