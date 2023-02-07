import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './Navbar';
import GetProfit from './content/getProfit';
import UpdateProfit from './content/updateProfit';
import FixedAsset from './content/fixedAsset';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<GetProfit />} />
      <Route path="/addProfit" element={<UpdateProfit />} />
      <Route path="/asset" element={<FixedAsset/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
