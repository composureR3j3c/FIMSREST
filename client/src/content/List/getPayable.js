import React, { useState, useEffect } from "react";
import deleteData from "../../helpers/deleteData";

// import LC from "./linecharts/lineCt";
import "../spinner.css";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#0f0c29" /* fallback for old browsers */,
    background:
      "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(7, 23, 31) 78.9%)",
    color: "white",
    width:"95%"
  },
};


// export var graphPoints=[]

export default function GetPayable() {
 
  const [Div1Class, setDiv1Class] = useState(
    "row justify-content-center d-flex align-items-center "
  );
  const [btnClass, setBtnClass] = useState("btn btn-primary m-2  mb-3");
  const [Payload, setPayload] =
    useState();
    // <div className="spinner-container">
    //   <div className="loading-spinner"></div>
    // </div>

  const [TimeDiffColor, setTimeDiffColor] = useState("text text-primary");

  const [Spinner, setSpinner] = useState(
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
  const [bodyTable, setbodyTable] = useState([]);

  const [ErrorMessage, setErrorMessage] = useState("");

  var transactionType = {};

  async function loadBody() {
    setbodyTable([])
    bodyTable1=[]
    setSpinner(
      <div className="spinner-container mb-3">
        <div className="loading-spinner"> </div>
      </div>
    );
    await fetch("http://127.0.0.1:5000/payable", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);
        
        setbodyTable(data.dbData);
        var responseArray =data.dbData
        console.log(bodyTable);
        setSpinner("");
      })
      .catch((data) => {
        //console.log(data);
        setErrorMessage("Can't handle request now, please try again later");
      });
  }

  var totalIN=0;
  var totalOut =0;
  var OverallBal=0;
  
  var bodyTable1 = bodyTable.map((res) => {
    // var serviceNm= res.service
    var IN=(res.Type=="Income")?res.Amount:0
    var OUT=(res.Type=="Expense")?res.Amount:0
    OverallBal+=IN-OUT
    totalIN+=parseInt(IN)
    totalOut=+parseInt(OUT)
    
    return (
        <tr key={res.Amount}>
          <td>{res.Date}</td>
          <td>{res.Invoice}</td>
          <td>{res.Supplier}</td>
          <td>Br. {res.Amount}</td>
          <td>{res.DueDate}</td>
          <td>Br. {res.Amount}</td>
          <td><button
            onClick={() => {
              // openModal();
              // getDetail(req.ID);
            }}
            className="btn btn-info"
          >
            Payment Deatil
          </button>
          <button
            onClick={() => {
              // openModal();
              // getDetail(req.ID);
            }}
            className="btn btn-warning m-2"
          >
           Edit
          </button>
          <button
            onClick={() => { 
              deleteData("payable",res.ID);
              window.location.reload(false);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
          </td>
        </tr>
    );
  });

  useEffect(() => {
    let ignore = false;
    
    if (!ignore) loadBody();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="container">
      {/* <form  method="post"> */}
      <div className="">
        {/* <img src={image} width="320" height="180" className="mb-3" /><br /> */}

        <div className={Div1Class}>
          <div className="col-lg-12 ">
            {/* <p>{Ttype} API calls</p> */}
{/*             
            <button onClick={loadBody} type="reload" className={btnClass}>
              Refresh
            </button> */}
          </div>
        </div>
      </div>

      <div name="cred" className={Div1Class}>
        <div className="col-lg-12 ">
          {Spinner}
          {/* <LC/> */}
          <table className="table table-striped table-dark p-2">
            <thead>
              <tr>
                <th scope="col">
                  <p className="p-2">Date</p>
                </th>
                <th scope="col">
                  <p className="p-2">Invoice Number</p>
                </th>
                <th scope="col">
                  <p className="p-2">Supplier</p>
                </th>
                <th scope="col">
                  <p className="p-2">Total Amount</p>
                </th>
                <th scope="col">
                  <p className="p-2">Due Date</p>
                </th>
                <th scope="col">
                  <p className="p-2">Balance Due</p>
                </th>
                <th scope="col">
                  <p className="p-2">Manage</p>
                </th>
              </tr>
            </thead>
            <tbody>{bodyTable1}</tbody>
            {/* <tfoot>
              <tr>
                <td>total</td>
                <td></td>
                <td>{totalIN}</td>
                <td>{totalOut}</td>
                <td>{OverallBal}</td>
                <td></td>
                
              </tr>
            </tfoot> */}
          </table>
          <div className="text-danger">{ErrorMessage}</div>
        </div>
      </div>
    </div>
  );
}
