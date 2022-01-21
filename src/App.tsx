import React from 'react';
import {Routes, Route} from "react-router";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/LogIn/LogIn";
import {GlobalStyles} from "./GlobalStyles";

function App() {
  return (
      <React.Fragment>
          <GlobalStyles/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<SignUp/>}/>
            <Route path="/Dashboard" />
          </Routes>
      </React.Fragment>
  );
}

export default App;
