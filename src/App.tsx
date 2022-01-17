import React from 'react';
import {Routes, Route} from "react-router";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SignUp/SignUp";


function App() {
  return (

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" />
            <Route path="/Signup" element={<SignUp/>}/>
            <Route path="/Dashboard" />
          </Routes>

  );
}

export default App;
