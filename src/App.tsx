import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/LogIn/LogIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
