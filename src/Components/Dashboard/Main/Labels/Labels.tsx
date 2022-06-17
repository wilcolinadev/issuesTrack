import React from "react";
import { Box } from "./LabelsStyles";

const Labels: React.FC = () => {
  return (
    <Box>
      <ul>
        <li> Customer ID</li>
        <li>Full Name</li>
        <li>Email</li>
        <li>Phone Number</li>
        <li>Description</li>
        <li>status</li>
      </ul>
    </Box>
  );
};

export default Labels;
