import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-2 mb-5 ">
        <a className="navbar-brand justify-content-center" href="#">
          FIMS
        </a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Profit
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/asset">
                Fixed Asset
              </a>
            </li>
            
            <li className="nav-item ">
              <a className="nav-link" href="/getPayable">
                Account Payable 
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/getRecieveble">
                Account Recieveble  
              </a>
            </li>
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
               Manage Finances
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/addAsset"> Add Fixed Asset</Dropdown.Item>
                <Dropdown.Item href="/addProfit">Add Profit</Dropdown.Item>
                <Dropdown.Item href="/addRecieveble"> Add Recieveble</Dropdown.Item>
                <Dropdown.Item href="/addPayable">Add Payable</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </nav>
    </div>
  );
}
