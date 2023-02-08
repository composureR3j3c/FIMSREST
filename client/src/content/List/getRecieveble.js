import React, { useState, useEffect } from "react";

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

export default function GetRecieveble() {
 
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
  const [Ttype, setTtype] = useState("Apollo");

  var transactionType = {};

  async function loadBody() {
    setbodyTable([])
    bodyTable1=[]
    setSpinner(
      <div className="spinner-container mb-3">
        <div className="loading-spinner"> </div>
      </div>
    );
    fetch("http://localhost:5000/profit", {
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
  
  var bodyTable1 = bodyTable.map((req) => {
    // var serviceNm= req.service
    var IN=(req.Type=="Income")?req.Amount:0
    var OUT=(req.Type=="Expense")?req.Amount:0
    OverallBal+=IN-OUT
    totalIN+=parseInt(IN)
    totalOut=+parseInt(OUT)
    
    return (
        <tr key={req.Amount}>
          <td>{req.date}</td>
          <td>{req.Description}</td>
          <td>{req.Type}</td>
          <td>{IN}</td>
          <td>{OUT}</td>
          <td>{OverallBal}</td>
          <td>
          <button
            className="btn btn-danger"
            onClick={() => {
            }}
          >
            DELETE
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
                  <p className="p-2">Description</p>
                </th>
                <th scope="col">
                  <p className="p-2">Category</p>
                </th>
                <th scope="col">
                  <p className="p-2">Income<br/>(Money IN)</p>
                </th>
                <th scope="col">
                  <p className="p-2">Expense<br/>(Money Out)</p>
                </th>
                <th scope="col">
                  <p className="p-2">Overall Balance</p>
                </th>
                <th scope="col">
                  <p className="p-2"></p>
                </th>
              </tr>
            </thead>
            <tbody>{bodyTable1}</tbody>
            <tfoot>
              <tr>
                <td>total</td>
                <td></td><td></td>
                <td>{totalIN}</td>
                <td>{totalOut}</td>
                <td>{OverallBal}</td>
                <td></td>
                
              </tr>
            </tfoot>
          </table>
          <div className="text-danger">{ErrorMessage}</div>
        </div>
      </div>
    </div>
  );
}
