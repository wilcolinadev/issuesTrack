import React from "react";
import { Box, InnerBox } from "./MainStyles";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import InputSearch from "./InputSearch/InputSearch";

interface MainProps {
  username: string;
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <Box>
      <InnerBox>
        <WelcomeMessage username={props.username} />
        <InputSearch />
      </InnerBox>
    </Box>
  );
};

export default Main;
