import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './Navbar';
import GetProfit from './content/getProfit';
import UpdateProfit from './content/updateProfit';
import FixedAsset from './content/fixedAsset';
import UpdateAsset from './content/updateAsset';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<GetProfit />} />
      <Route path="/addProfit" element={<UpdateProfit />} />
      <Route path="/addAsset" element={<UpdateAsset />} />
      <Route path="/asset" element={<FixedAsset/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
