import React, { useState } from "react";
import { nanoid } from "nanoid";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './Pages/Db';
import Aircraftstatus from './Pages/As';
import FlyingProgram from './Pages/Fp';
import Eauthobook from './Pages/Eab';
import AircraftMaintenance from './Pages/Am';
import CrewDetails from './Pages/Cd';
import Reportsreturns from './Pages/Rr';
import Mypage from './Pages/Mp';
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path = '/' exact element={<Dashboard/>}/>
      <Route path = '/Aircraftstatus' exact element={<Aircraftstatus />}/>
      <Route path = '/FlyingProgram' exact element={<FlyingProgram />}/>
      <Route path = '/Eauthobook' exact element={<Eauthobook />}/>
      <Route path = '/AircraftMaintenance' exact element={<AircraftMaintenance />}/>
      <Route path = '/CrewDetails' exact element={<CrewDetails />}/>
      <Route path = '/Reportsreturns' exact element={<Reportsreturns />}/>
      <Route path = '/Mypage' exact element={<Mypage />}/>

    </Routes>
    </Router>
  </>
  );
}
export default App;
