import React from "react";
import { Box } from "./WelcomeMessageStyles";

interface MainProps {
  username: string;
}

const sliceName = (name) => {
  const slicedName = name.split(" ");
  return slicedName[0];
};
const WelcomeMessage: React.FC<MainProps> = (props) => {
  return (
    <Box>
      <p> Hello {sliceName(props.username)}, Welcome back</p>
      <h1>Let 's solve some issues.</h1>
    </Box>
  );
};

export default WelcomeMessage;
