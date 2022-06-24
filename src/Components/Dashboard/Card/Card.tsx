import React, { useState } from "react";
import { ModalBox, Label } from "./CardStyles";
import { useSelector, useDispatch } from "react-redux";
import { RootStateOrAny } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../../state/actions/actionCreators";
import { ModalLink } from "../../Modal/ModalStyles";
import { IoCloseSharp } from "react-icons/io5";
import { getDatabase, ref, set, update, remove } from "firebase/database";

const Card: React.FC = () => {
  const activeIssue = useSelector((state: RootStateOrAny) => state.activeIssue);
  const isCardActive = useSelector(
    (state: RootStateOrAny) => state.isCardActive
  );
  const user = useSelector((state: RootStateOrAny) => state.isUserAuth);
  const dispatch = useDispatch();
  const { toggleActiveCard } = bindActionCreators(ActionCreators, dispatch);
  const [newSelection, setNewSelection] = useState<undefined | string>(
    "Active"
  );

  const updateIssue = (e) => {
    e.preventDefault();
    if (activeIssue.uid) {
      const isIssueActive = newSelection === "Active" && true;
      const db = getDatabase();
      return update(ref(db, `issues/${user.user.uid}/${activeIssue.uid}`), {
        active: isIssueActive,
      }).then(() => {
        toggleActiveCard();
      });
    }
  };

  const removeIssue = (e) => {
    e.preventDefault();
    if (activeIssue.uid) {
      const db = getDatabase();
      return remove(ref(db, `issues/${user.user.uid}/${activeIssue.uid}`)).then(
        () => {
          toggleActiveCard();
        }
      );
    }
  };

  return (
    <ModalBox active={isCardActive}>
      <div>
        <h1>Issue </h1>
        <i onClick={() => toggleActiveCard()}>
          <IoCloseSharp />
        </i>
      </div>

      <Label>ID</Label>
      <p>{activeIssue.id}</p>
      <Label>Name</Label>
      <p>{activeIssue.name}</p>
      <Label>Description</Label>
      <p>{activeIssue.description}</p>
      <Label>Email</Label>
      <p>{activeIssue.email}</p>
      <Label>Phone number</Label>
      <p>{activeIssue.phone}</p>
      <Label>Date</Label>
      <p>{activeIssue.date}</p>
      <form>
        <select
          id="selection"
          name="selection"
          onChange={(e) => setNewSelection(e.currentTarget.value)}
        >
          <option value="Active">Active</option>
          <option value="Closed" selected>
            Closed
          </option>
        </select>

        <div>
          <ModalLink
            onClick={(e) => updateIssue(e)}
            colorB={"#ccc"}
            fontColor={"#000"}
            type="submit"
          >
            Update
          </ModalLink>
          <ModalLink
            onClick={(e) => removeIssue(e)}
            colorB={"#d40c0c"}
            fontColor={"#fff"}
            hover={"#000"}
          >
            Remove Issue
          </ModalLink>
        </div>
      </form>
    </ModalBox>
  );
};

export default Card;
