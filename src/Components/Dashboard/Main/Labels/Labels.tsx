import React from "react";
import {
  Box,
  LiName,
  LiId,
  LiEmail,
  LiDescription,
  LiPhone,
} from "./LabelsStyles";

const Labels: React.FC = () => {
  return (
    <Box>
      <ul>
        <LiName>Name</LiName>
        <li> ID</li>
        <LiEmail>Email</LiEmail>
        <LiPhone>Phone Number</LiPhone>
        <LiDescription>Description</LiDescription>
        <li>status</li>
      </ul>
    </Box>
  );
};

export default Labels;
