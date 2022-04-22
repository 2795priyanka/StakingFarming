import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Main from './components/Main';
import Staking from './components/Staking'
import UnStaking from './components/UnStaking';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/stake" element={<Staking />} />
     <Route path="/unStake" element={<UnStaking />} />
   </Routes>
 </BrowserRouter>
  )
}

export default App
//  basename='/staking_farming/'