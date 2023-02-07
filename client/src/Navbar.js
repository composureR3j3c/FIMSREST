import React from "react";


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
              <a className="nav-link" href="/addProfit">
                Add Profit
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/addAsset">
                Add Fixed Asset
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/asset">
              Fixed Asset
              </a>
            </li>
          </ul>

          
        </div>
      </nav>
    </div>
  );
}