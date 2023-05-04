/* eslint-disable react/prop-types */
import React from "react";

const Cart = ({ cart,handleRemoveCart }) => {
  //console.log(cart);
  return (
    <div>
      <h2>Order summary</h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name} <button onClick={()=>handleRemoveCart(tshirt._id)} >X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
