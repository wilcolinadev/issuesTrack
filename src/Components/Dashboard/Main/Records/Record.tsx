import React from "react";
import { Box, LiDescription, LiName, LiPhone, LiStatus } from "./RecordsStyles";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../../../state/actions/actionCreators";

interface issuesProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  date: string;
  active?: boolean;
  uid: string;
}

const Record: React.FC<issuesProps> = (props) => {
  const { id, name, email, phone, description, date, active, uid } = props;

  const dispatch = useDispatch();
  const isCardActive = useSelector(
    (state: RootStateOrAny) => state.isCardActive
  );
  const { setActiveIssue } = bindActionCreators(ActionCreators, dispatch);
  const { toggleActiveCard } = bindActionCreators(ActionCreators, dispatch);

  const formatPhone = () => {
    const phoneCode = phone.slice(0, 3);
    const phoneOne = phone.slice(3, 6);
    const phoneTwo = phone.slice(6, 10);
    return `${phoneCode}-${phoneOne}-${phoneTwo}`;
  };

  const formatName = () => {
    const namedArray = name.split(" ");
    return `${namedArray[0]}  ${namedArray[1].slice(0, 1)}`;
  };

  const handleDescription = () => {
    if (description.length > 20) {
      return "Click to see...";
    } else {
      return description;
    }
  };
  const handleCard = () => {
    setActiveIssue({
      id,
      name,
      email,
      phone: formatPhone(),
      description,
      date,
      active,
      uid,
    });
    if (!isCardActive) {
      toggleActiveCard();
    }
  };

  return (
    <Box onClick={() => handleCard()}>
      <ul>
        <LiName> {formatName()}</LiName>
        <li>#{id} </li>
        <LiPhone>{formatPhone()}</LiPhone>
        <LiDescription>{handleDescription()}</LiDescription>
        <LiStatus active={!active}>{active ? "Closed" : "Active"}</LiStatus>
      </ul>
    </Box>
  );
};

export default Record;
