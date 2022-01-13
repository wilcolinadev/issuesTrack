import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {NavigationElement, NavigationTitle, NavigationWrapper} from "./NavigationStyles";
import Hamburger from "./Hamburger/Hamburger";


const Navigation:React.FC =()=>{

    return(
        <Fragment>
            <NavigationWrapper padding={2} justifyFlex={"space-between"}>

                <NavigationWrapper  justifyFlex={"center"}>
                    <Link to={"/"}>
                         <NavigationTitle>
                            IssuesTrack
                         </NavigationTitle>
                    </Link>
                 </NavigationWrapper>
                <NavigationWrapper justifyFlex={"center"}>
                    <Hamburger/>
                </NavigationWrapper>

            {/*    <NavigationWrapper justifyFlex={"space-between"}>*/}

            {/*<Link to={"/Login"} >*/}
            {/*    <NavigationElement>*/}
            {/*        Log In*/}
            {/*    </NavigationElement>*/}
            {/*</Link>*/}

            {/*<Link to={"/Signup"} >*/}

            {/*    <NavigationElement>*/}
            {/*        Sign up*/}
            {/*    </NavigationElement>*/}

            {/*</Link>*/}
            {/*</NavigationWrapper>*/}

            </NavigationWrapper>
    </Fragment>)
};

export default Navigation