import React from "react";
import Button from "./Button/Button";
import headerImage from "../../../assets/HeaderImage.svg";
import {HeaderImage, HeaderTitle} from "./HeaderStyles";
const Header:React.FC = () =>(
    <React.Fragment>
        <HeaderTitle>
            Help your company to solve some problems
        </HeaderTitle>
        <Button/>
        <div style={{textAlign:"center"}}>
            <HeaderImage src={headerImage} alt="Team Work at Issues Track"/>
        </div>
    </React.Fragment>

);

export default Header;