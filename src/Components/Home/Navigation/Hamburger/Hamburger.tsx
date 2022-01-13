import React, {useState} from "react";
import {Burger} from "./HamburgerStyles";

const Hamburger:React.FC = () =>{
    const [isHamburgerActive, setIsHamburgerActive]= useState(false);
return(
   <Burger open={isHamburgerActive} onClick={()=>setIsHamburgerActive(!isHamburgerActive)}>
       <div/>
       <div/>
       <div/>
   </Burger>
)
};

export default Hamburger;