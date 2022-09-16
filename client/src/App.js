import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import React from 'react';
import Detail from "./components/Detail";
import Create from "./components/Create"

function App() {
  return (
       
    <div className="App">
      <Routes>
        <Route path = "/*" element = {<LandingPage/>}/>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path= '/home/:id' element = {<Detail/>}/>
        <Route path= '/Create' element = {<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;