import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = () => {
    const angti =useContext(ringContext)
    return (
        <div>
            <p>Special</p>
            {angti}
        </div>
    );
};

export default Special;