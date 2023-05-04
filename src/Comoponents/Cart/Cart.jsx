/* eslint-disable react/prop-types */
import React from "react";
import './Cart.css'

const Cart = ({ cart,handleRemoveCart }) => {
  //console.log(cart);
  return (
    <div>
      <h2 className={cart.length===2?'red':'blue'}>Order summary</h2>
       {
         cart.length>2? <span className={`bold ${cart.length===3?'red':'blue'}`}>cart products greater than two</span>:<span>cart products greater than two</span>
       }

       {/* logical && */}
       {
    cart.length===2  && <p className={'bold'}>two products logical and</p>
       }
       {/* logical || */}
       {
        cart.length===3 || <p>cart length not three logical or</p>
       }
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name} <button onClick={()=>handleRemoveCart(tshirt._id)} >X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
// conditional rendering 
/**
 * 1. simple if else
 * 2.ternary
 * 3/logial && ->if the condition is true then next thing displayed
 * 4.logical ||-> if the condition false next thing happen
 * 
 * consitional css
 */