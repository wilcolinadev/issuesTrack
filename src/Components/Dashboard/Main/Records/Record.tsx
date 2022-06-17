import React from "react";
import { Box } from "./RecordsStyles";

interface issuesProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

const Record: React.FC<issuesProps> = (props) => {
  const { id, name, email, phone, description } = props;
  return (
    <Box>
      <ul>
        <li> {id} </li>
        <li>{name}</li>
        <li>{email} </li>
        <li>{phone}</li>
        <li>{description}</li>
        <li>stus</li>
      </ul>
    </Box>
  );
};

export default Record;
