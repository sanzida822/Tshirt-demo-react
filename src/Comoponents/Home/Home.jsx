import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleCart = (tshirt) => {

    const exist=cart.find(cart=>cart._id===tshirt._id);
    
    if(exist){

     toast('You have already added this tshirt');
    }else{
      const newCart=[...cart,tshirt]
      setCart(newCart)
    }
    
  };

  const handleRemoveCart = (id) => {
   console.log(id)
      const remaining=cart.filter(cart=>cart._id!==id);
      setCart(remaining)
  };
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt} handleCart={handleCart}>
          
          </Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
