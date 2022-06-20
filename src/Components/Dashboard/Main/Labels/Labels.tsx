import React from "react";
import { Box, LiName, LiId } from "./LabelsStyles";

const Labels: React.FC = () => {
  return (
    <Box>
      <ul>
        <li>Name</li>
        <li> Customer ID</li>
        <li>Email</li>
        <li>Phone Number</li>
        <li>Description</li>
        <li>status</li>
      </ul>
    </Box>
  );
};

export default Labels;
