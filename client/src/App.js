import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import React from 'react';
import Create from "./components/Create"

function App() {
  return (
       
    <div className="App">
      <Routes>
        <Route path = "/*" element = {<Home/>}/>
        <Route path= '/Create' element = {<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;