
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Coins from "./component/Coins";
import Header from './component/Header';
import  React,{ useState } from "react";
import Home from './component/Home';
import Footer from './component/Footer/Footer'
import Exchanges from './component/Exchanges';
import CoinsDetails from "./component/CoinsDetails";
function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState()
  const [boxcolor, setBoxcolor] = useState('white')

  const toggleMode=()=>{

    if(mode ==='light'){
      setMode('dark');
      setBoxcolor('rgb(35 32 32)')
      setColor('white')
       document.body.style.backgroundColor='black';
     
     
    }
     else{
      setColor('black')
       setMode('light');
       setBoxcolor('white')
       document.body.style.backgroundColor='white';
     }
  }
  return (
   <>
   <Router>
    <Header mode={mode} toggleMode={toggleMode}/>
    <Routes>

 <Route  path="/" element={<Home />} />
<Route path="/coins" element={<Coins col={color} boxcol={boxcolor}/>}/>
<Route path="/exchanges" element={<Exchanges  col={color} boxcol={boxcolor}/>}/>
<Route path="/coin/:id" element={<CoinsDetails col={color} boxcol={boxcolor}/>}/> 




    </Routes>
    <Footer/>
   </Router>
   
   </>
  );
}

export default App;
