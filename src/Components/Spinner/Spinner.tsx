import React from "react";
import {RotateLoader} from "react-spinners";
import {InnerBox, SpinnerBox} from "./SpinnerStyles";

interface SpinnerProps {
    loading: boolean
}
const Spinner: React.FC <SpinnerProps> = ({loading})=>(
    <SpinnerBox state={loading}>
        <InnerBox>
            <RotateLoader loading={loading}  size={30}/>
        </InnerBox>
    </SpinnerBox>
);


export default Spinner;