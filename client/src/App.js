import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './Navbar';


import GetProfit from './content/List/getProfit';
import UpdateProfit from './content/Update/updateProfit';
import UpdateAsset from './content/Update/updateAsset';
import FixedAsset from './content/List/fixedAsset';
import GetReceivable from './content/List/getReceivable';
import AddReceivable from './content/Update/addReceivable';
import GetPayable from './content/List/getPayable';
import AddPayable from './content/Update/addPayable';
import Home from './content/home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profit" element={<GetProfit />} />
      <Route path="/addProfit" element={<UpdateProfit />} />
      <Route path="/addAsset" element={<UpdateAsset />} />
      <Route path="/asset" element={<FixedAsset/>}/>

      <Route path="/getPayable" element={<GetPayable />} />
      <Route path="/getReceivable" element={<GetReceivable />} />
      <Route path="/addReceivable" element={<AddReceivable/>}/>
      <Route path="/addPayable" element={<AddPayable />} />
      </Routes>
       
    </div>
  );
}

export default App;
