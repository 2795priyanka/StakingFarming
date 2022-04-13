import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Main from './components/Main';
import Staking from './components/Staking'
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
     <Route path="/staking" element={<Staking />} />
     
   </Routes>
 </BrowserRouter>
  )
}

export default App
//  basename='/stacking_farming/'