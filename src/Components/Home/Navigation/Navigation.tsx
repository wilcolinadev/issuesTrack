import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {NavigationElement, NavigationTitle, NavigationWrapper} from "./NavigationStyles";


const Navigation =()=>{

    return(
        <Fragment>
            <NavigationWrapper padding={2} justifyFlex={"space-around"}>


        <NavigationWrapper  justifyFlex={"center"}>
            <Link to={"/"}>
                <NavigationTitle>
                    IssuesTrack
                </NavigationTitle>
            </Link>
        </NavigationWrapper>

        <NavigationWrapper justifyFlex={"space-between"}>

            <Link to={"/Login"} >
                <NavigationElement>
                    Log In
                </NavigationElement>
            </Link>

            <Link to={"/Signup"} >

                <NavigationElement>
                    Sign up
                </NavigationElement>

            </Link>
        </NavigationWrapper>

            </NavigationWrapper>
    </Fragment>)
};

export default Navigation