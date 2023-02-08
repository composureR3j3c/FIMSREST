import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateAsset() {

const [Name,setName,]=useState("")
const [Category,setCategory,]=useState("")
const [acqDate,setacqDate,]=useState("")
const [Rate,setRate,]=useState("")
const [orgValue,setorgValue]=useState("")
const [ErrorMessage,setErrorMessage]=useState("")


let history = useNavigate();

  function addItem(params) {
    var item={
      Name:Name,
      Category:Category,
      acqDate:acqDate,
      Rate:Rate,
      orgValue:orgValue
    }
    fetch("http://localhost:5000/addAsset", {
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
        placeholder="Enter Name"
        value={Name} onChange={(e)=>  {setName(e.target.value)}}/>
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Category"
        value={Category} onChange={(e)=>  {setCategory(e.target.value)}}/>
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Acquisition Date"
        value={acqDate} onChange={(e)=>  {setacqDate(e.target.value)}}/>
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Depriciation Rate"
        value={Rate} onChange={(e)=>  {setRate(e.target.value)}}/>
      <input
        type="text"
        className="form-control m-3"
        placeholder="Enter Orginal Value"
        value={orgValue} onChange={(e)=>  {setorgValue(e.target.value)}}/>
      {ErrorMessage}
      <button onClick={addItem} className='btn btn-success'>ADD</button>
      </div>
    </div>
    </div>
  );
}