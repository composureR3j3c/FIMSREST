import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './Navbar';


import GetProfit from './content/List/getProfit';
import UpdateProfit from './content/Update/updateProfit';
import UpdateAsset from './content/Update/updateAsset';
import FixedAsset from './content/List/fixedAsset';
import GetRecieveble from './content/List/getRecieveble';
import AddRecieveble from './content/Update/addRecieveble';
import GetPayable from './content/List/getPayable';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<GetProfit />} />
      <Route path="/addProfit" element={<UpdateProfit />} />
      <Route path="/addAsset" element={<UpdateAsset />} />
      <Route path="/asset" element={<FixedAsset/>}/>

      <Route path="/getPayable" element={<GetPayable />} />
      <Route path="/getRecieveble" element={<GetRecieveble />} />
      {/* <Route path="/addRecieveble" element={<AddRecieveble/>}/> */}
      {/* <Route path="/addPayable" element={<AddPayable />} /> */}
      </Routes>
       
    </div>
  );
}

export default App;
