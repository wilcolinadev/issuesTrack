import React from "react";
import {HeaderButton} from "./ButtonStyles";
import {Link} from "react-router-dom";
const Button:React.FC = () =>(
    <Link to={"/Login"}>
        <HeaderButton>
            Let's track some problems
        </HeaderButton>
    </Link>
);

export default Button;