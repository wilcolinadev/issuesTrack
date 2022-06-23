import React from "react";
import { Box, LiName, LiStatus } from "./RecordsStyles";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ActionCreators from "../../../../state/actions/actionCreators"
interface issuesProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

const Record: React.FC<issuesProps> = (props) => {
  const { id, name, email, phone, description } = props;

  const dispatch = useDispatch();

  const {setActiveIssue} = bindActionCreators(ActionCreators, dispatch)
  const shortName = () => {
    const splittedName = name.split(" ");
    return `${splittedName[0]} ${splittedName[1].slice(0, 1)}`;
  };

  const formatPhone = () => {
    const phoneCode = phone.slice(0, 3);
    const phoneOne = phone.slice(3, 6);
    const phoneTwo = phone.slice(6, 10);
    return `${phoneCode}-${phoneOne}-${phoneTwo}`;
  };

  const handleDescription = () => {
    if (description.length > 20) {
      return "Click to see...";
    } else {
      return description;
    }
  };
  return (
    <Box onClick={()=>setActiveIssue(props)}>
      <ul>
        <LiName> {name}</LiName>
        <li>#{id} </li>
        <li>{email} </li>
        <li>{formatPhone()}</li>
        <li>{handleDescription()}</li>
        <LiStatus active={true}>Open</LiStatus>
      </ul>
    </Box>
  );
};

export default Record;
