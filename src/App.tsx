import React from 'react';
import {Routes, Route} from "react-router";
import Home from "./Components/Home/Home"
import {GlobalStyles} from "./Components/globalStyles/globalStyles";


function App() {
  return (
      <GlobalStyles>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" />
            <Route path="/Signup" />
            <Route path="/Dashboard" />
          </Routes>
      </GlobalStyles>
  );
}

export default App;
