import React from "react";
import {Link} from "react-router-dom";


 const Home =()=>(
        <>
            <h1>
                Hi bitch
            </h1>
            <Link to="/login"> Log in </Link>
            <Link to="/Signup"> Sign Up </Link>
            <Link to="/Dashboard"> Dashboard </Link>
        </>
 );

 export default Home;