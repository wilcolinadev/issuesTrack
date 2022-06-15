import React from "react";
import { Box, InnerBox, InnerBoxText, AddButton } from "./MainStyles";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import InputSearch from "./InputSearch/InputSearch";
import DashboardChart from "./Chart/DashboardChart";

interface MainProps {
  username: string;
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <Box>
      <InnerBox>
        <InnerBoxText>
          <InputSearch />
          <WelcomeMessage username={props.username} />
          <AddButton> Register Issue</AddButton>
        </InnerBoxText>
        <div>
          <DashboardChart />
        </div>
      </InnerBox>
    </Box>
  );
};

export default Main;
