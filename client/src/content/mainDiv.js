import React, { useState, useEffect } from "react";
import GetProfit from "./getProfit";
import UpdateProfit from "./updateProfit";


export default function MainDiv() {
    const [OpptionS, setOpptionS] = useState();
    const [currentMode,setcurrentMode] = useState();
    

    useEffect(() => {
        let ignore = false;
    
        if (!ignore) changeMainDiv();
        return () => {
          ignore = true;
        };
      }, [OpptionS]);
  function changeMainDiv() {
    console.log(OpptionS)
    if (OpptionS === "1") {
        setcurrentMode(<UpdateProfit />)
      } else if (OpptionS === "2")  {
        setcurrentMode(<GetProfit />)
      } 
      else if (OpptionS === "3")  {
        // setcurrentMode(<MonitID />)
      }
      else{
        setcurrentMode(<GetProfit />)
      }
      
  }
  
  
  const handleChange = (e) =>  setOpptionS(e.target.value);
    return (
      <div className="MainDiv">
        
        <select
              className="btn btn-outline-info dropdown-toggle mb-3 m-2 "
               id="mySelect"  onChange={(e)=>{ e.preventDefault();changeMainDiv(); setOpptionS(e.target.value); 
                console.log(e.target.value)
                changeMainDiv();
              }} 
                >
                  <option value="2">Profit</option>
              <option value="1" >Update Profit</option>
              
              <option value="3">Exchange Rate</option>
            </select>
            
            {currentMode}
        
      </div>
    );
  

}