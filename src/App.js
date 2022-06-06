import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Main from './components/Main';
// import Staking from './components/Staking'
import StakingToken1 from './components/StakingToken1';
import StakingToken2 from './components/StakingToken2';
import UnStaking from './components/UnStaking';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter basename='/staking_farming/'>
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stakeToken1" element={<StakingToken1 />} />
        <Route path="/stakeToken2" element={<StakingToken2 />} />
        <Route path="/unStake" element={<UnStaking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
//  basename='/staking_farming/'