import React from "react";
import {Box} from './MainStyles';

interface MainProps {
    username:string
}

const Main: React.FC <MainProps>= (props) => {
    return (
        <Box>
            <h1>Main</h1>
            <h1> Welcome in {props.username}</h1>

        </Box>
    );
};

export default Main;
