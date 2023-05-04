import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Comoponents/Home/Home.jsx';
import Main from './Comoponents/Layout/Main.jsx';
import OrderReview from './Comoponents/OrderReview/OrderReview.jsx';
import Grandpa from './Comoponents/Grandpa/Grandpa.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
  children:[{
    path: "/",
    element:<Home></Home>,
    loader:()=>fetch("tshirts.json")
  },
  {
    path: "orderReview",
    element:<OrderReview></OrderReview>,
  },
  {
    path: "grandpa",
    element:<Grandpa></Grandpa>
    
  },
 

]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);