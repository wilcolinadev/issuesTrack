import React from "react";
import { PacmanLoader } from "react-spinners";
import { InnerBox, SpinnerBox, SpinnerDescription } from "./SpinnerStyles";

interface SpinnerProps {
  loading: boolean;
  message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ loading, message }) => (
  <SpinnerBox state={loading}>
    <InnerBox>
      <PacmanLoader loading={loading} size={35} color={"#ffca20"} />
      <SpinnerDescription>
        {message ? message : "Loading..."}{" "}
      </SpinnerDescription>
    </InnerBox>
  </SpinnerBox>
);

export default Spinner;
