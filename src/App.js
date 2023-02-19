
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Coins from "./component/Coins";
import Header from './component/Header';
import { useState } from "react";
import Home from './component/Home';
import Exchanges from './component/Exchanges';
import CoinsDetails from "./component/CoinsDetails";
function App() {
  const [mode, setMode] = useState('light');
  // if(mode ==='light'){
  //   setMode('dark');
  //   document.body.style.backgroundColor='#042743';
   
  // }
  // else{
  //   setMode('light');
  //   document.body.style.backgroundColor='white';
  // }
  return (
   <>
   <Router>
    <Header />
    <Routes>

 <Route  path="/" element={<Home/>} />
<Route path="/coins" element={<Coins/>}/>
<Route path="/exchanges" element={<Exchanges/>}/>
<Route path="/coin/:id" element={<CoinsDetails/>}/> 




    </Routes>
   </Router>
   
   </>
  );
}

export default App;
