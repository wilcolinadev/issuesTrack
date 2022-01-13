import React from 'react';
import {Routes, Route} from "react-router";
import Home from "./Components/Home/Home";



function App() {
  return (

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" />
            <Route path="/Signup" />
            <Route path="/Dashboard" />
          </Routes>

  );
}

export default App;
