import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPayable() {

const [Supplier,setSupplier,]=useState("")
const [Amount,setAmount,]=useState("")
const [DueDate,setDueDate,]=useState("")
const [Invoice,setInvoice,]=useState("")
const [ErrorMessage,setErrorMessage]=useState("")


let history = useNavigate();

  function addItem(params) {
    var item={
      Amount:Amount,
      DueDate:DueDate,
      Invoice:Invoice,
      Supplier:Supplier
    }
    fetch("http://localhost:5000/addPayable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(item),
    })
    .then((response) => response.json())
    .then((data) => {

    }).catch((data) => {
      
      setErrorMessage("Can't handle request now, please try again later");
    });
    history('/')
  }

  return (
    <div className="container col-md-5">
    <div className="row justify-content-center p-3 rounded  bg-secondary m-3 ">
      <div className="col-md-8">
      
     
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Supplier"
        value={Supplier} onChange={(e)=>  {setSupplier(e.target.value)}}/>
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Amount"
        value={Amount} onChange={(e)=>  {setAmount(e.target.value)}}/>
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Due Date"
        value={DueDate} onChange={(e)=>  {setDueDate(e.target.value)}}/>
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Invoice num"
        value={Invoice} onChange={(e)=>  {setInvoice(e.target.value)}}/>
      
      {ErrorMessage}
      <button onClick={addItem} className='btn btn-success'>ADD</button>
      </div>
    </div>
    </div>
  );
}