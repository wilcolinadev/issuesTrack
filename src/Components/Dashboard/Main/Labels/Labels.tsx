import React from "react";
import { Box, LiDescription, LiName, LiPhone } from "./LabelsStyles";

const Labels: React.FC = () => {
  return (
    <Box>
      <ul>
        <LiName>Name</LiName>
        <li> ID</li>
        <LiPhone>Phone Number</LiPhone>
        <LiDescription>Description</LiDescription>
        <li>status</li>
      </ul>
    </Box>
  );
};

export default Labels;
