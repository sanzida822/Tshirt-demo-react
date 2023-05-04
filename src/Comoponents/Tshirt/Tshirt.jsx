import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handleCart}) => {
   
    const {name,price,picture}=tshirt;
    return (
        <div className='tshirt-container'>
           <img src={picture} alt="" /> 
           <h4>{name}</h4>
           <p>{price}</p>
           <button onClick={()=>handleCart(tshirt)}>buy now</button>
        </div>
    );
};

export default Tshirt;