import React from "react";
import { PacmanLoader } from "react-spinners";
import { InnerBox, SpinnerBox, SpinnerDescription } from "./SpinnerStyles";

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => (
  <SpinnerBox state={loading}>
    <InnerBox>
      <PacmanLoader loading={loading} size={35} color={"#ffca20"} />
      <SpinnerDescription> Loading... </SpinnerDescription>
    </InnerBox>
  </SpinnerBox>
);

export default Spinner;
