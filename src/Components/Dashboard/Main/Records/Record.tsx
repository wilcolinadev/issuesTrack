import React from "react";
import { Box, LiName, LiId } from "./RecordsStyles";

interface issuesProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

const Record: React.FC<issuesProps> = (props) => {
  const { id, name, email, phone, description } = props;
  const shortName = ()=>{
   const splittedName = name.split(' ');
   return `${splittedName[0]} ${splittedName[1].slice(0,1)}`

  };
  return (
    <Box>
      <ul>
        <LiName> {name}</LiName>
        <li>#{id} </li>
        <li>{email} </li>
        <li>{phone}</li>
        <li>{description}</li>
        <li>status</li>
       </ul>
    </Box>
  );
};

export default Record;
