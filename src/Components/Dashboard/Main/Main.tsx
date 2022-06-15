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
          <div>
              <InputSearch />
              <WelcomeMessage username={props.username} />
          </div>
            <div>
                <h1>Graph</h1>
                <button>Add Issue</button>
            </div>
      </InnerBox>
    </Box>
  );
};

export default Main;
