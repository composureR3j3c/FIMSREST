import React, { useState, useEffect } from "react";

// import LC from "./linecharts/lineCt";
import "./spinner.css";


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

export default function UpdateProfit() {
 
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
        
        setSpinner("");
      })
      .catch((data) => {
        //console.log(data);
        setErrorMessage("Can't handle request now, please try again later");
      });
  }

  async function getPayload(time) {
    setPayload(
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
    transactionType = {
      RequestDate: `${time}`,
    };
    fetch("https://dcsms2.bankofabyssinia.com/selfReset/payload.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(transactionType),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);

        setPayload(
          <div>
            <div className="text-warning m-2 reqres">
              <h6>Request</h6>
              {data.Requests.request[0].request} <br />
              <hr/>
            </div>
            <div className="text-info m-2 reqres">
              <h6>Response</h6>
              <p>{data.Requests.request[0].response}</p>
            </div>
          </div>
        );
        //console.log("data");
        //console.log(data);
        setSpinner("");
      })
      .catch((data) => {
        //console.log(data);
        setErrorMessage("Can't handle request now, please try again later");
      });
  }
  var bodyTable1 = bodyTable.map((req) => {
   
    // console.log(requestDescription.values)
   
    if (req.TimeDifference.substring(4, 5).includes("0")) {
      //  setTimeDiffColor("text text-danger")
    }
    //console.log("req.TimeDifference.substring#############################))");
    //console.log(req.TimeDifference.substring(4, 5));
    var serviceNm= req.service
    return (
      <div></div>
        // <tr key={req.ResponseDate}>
        //   {/* <td>{req.service}</td>
        //     <td>{nameLookup[serviceNm]}</td>
        //   <td className={TimeDiffColor}>
        //     {req.TimeDifference.substring(6, req.TimeDifference.length)}
        //   </td>
        //   <td className={TimeDiffColor}>
        //     {req.TimeDifferenceT24.substring(7, req.TimeDifferenceT24.length)}
        //   </td>
        //   <td>{req.RequestDate}</td>
        //   <td>{req.ResponseDate}</td>
        //   {/* <td>{req.status}</td> */}
        //   <td>
        //     <button
        //       onClick={() => {
        //         openModal();
        //         getPayload(req.ResponseDate);
        //       }}
        //       className="btn btn-info"
        //     >
        //       View Deatil
        //     </button>
        //     <div className="container col-lg-10">
        //     <Modal
        //       isOpen={modalIsOpen}
        //       onAfterOpen={afterOpenModal}
        //       onRequestClose={closeModal}
        //       style={customStyles}
        //     >
        //       <h2
        //         ref={(_subtitle) => (subtitle = _subtitle)}
        //         className="m-2 p-3"
        //       >
        //         Payload
        //       </h2>
        //       <div className="m-3 p-3">{Payload}</div>
        //       <button
        //         onClick={() => {
        //           closeModal();
        //           setPayload();
        //         }}
        //         className="btn btn-danger m-3 con d-flex flex-row-reverse"
        //       >
        //         close
        //       </button>
        //     </Modal>
        //     </div>
        //   </td> */}
        // </tr>
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
            
            <button onClick={loadBody} type="reload" className={btnClass}>
              Refresh
            </button>
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
                  <p className="p-2">Request name</p>
                </th>
                <th scope="col">
                  <p className="p-2">Request Description</p>
                </th>
                <th scope="col">
                  <p className="p-2">ESB Latency<br/>(s.ms)</p>
                </th>
                <th scope="col">
                  <p className="p-2">T24 Latency<br/>(s.ms)</p>
                </th>
                <th scope="col">
                  <p className="p-2">Request Time</p>
                </th>
                <th scope="col">
                  <p className="p-2">Response Time</p>
                </th>
               
                <th scope="col">
                  <p className="p-2">Request Body/ Response Body</p>{" "}
                </th>
                {/* <th scope="col">Status</th> */}
              </tr>
            </thead>
            <tbody>{bodyTable1}</tbody>
          </table>
          <div className="text-danger">{ErrorMessage}</div>
        </div>
      </div>
    </div>
  );
}
