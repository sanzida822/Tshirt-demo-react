import React, { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunti from "../Aunti/Aunti";
import "./Grandpa.css";
import Myself from "../Myself/Myself";
export const ringContext=createContext("gold");
const Grandpa = () => {
    
  return (
    <div className="grandpa">
      
        <h2>Grandpa</h2>
      
      <div>
        <div className="grandpa-container">
          <ringContext.Provider value="golder-ring">
          <Father></Father>
          <Uncle></Uncle>
          <Aunti></Aunti>
          </ringContext.Provider>
       
        </div>
      </div>
    </div>
  );
};


export default Grandpa;
