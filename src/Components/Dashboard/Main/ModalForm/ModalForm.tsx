import React, { useState } from "react";
import { ModalText, ModalLink } from "../../../Modal/ModalStyles";
import { IssueForm, ModalBox } from "./ModalFormStyles";
import { useSelector, useDispatch } from "react-redux";
import { RootStateOrAny } from "react-redux";
import { getDatabase, set, ref } from "firebase/database";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../../Auth/validation";
import * as ActionCreators from "../../../../state/actions/actionCreators";
import { bindActionCreators } from "redux";
import { v4 as uuidv4 } from "uuid";

const ModalForm = () => {
  const isModalOpen = useSelector(
    (state: RootStateOrAny) => state.isModalFormOpen
  );
  const activeIssues = useSelector(
    (state: RootStateOrAny) => state.activeIssues
  );

  const user = useSelector((state: RootStateOrAny) => state.isUserAuth);
  const isModalFormOpen = useSelector((state :RootStateOrAny)=>state.isModalFormOpen);
  const dispatch = useDispatch();
  const [isFormValid, setIsFormValid] = useState(false);
  const { addIssue,toggleModalForm } = bindActionCreators(ActionCreators, dispatch);


  const storeIssue = (userRecord) => {
    let myuuid = uuidv4();
    // console.log(user);
    const db = getDatabase();
    return set(ref(db, `issues/${user.user.uid}/${myuuid}`), {
      id: userRecord.id,
      name: userRecord.name,
      email: userRecord.email,
      phone: userRecord.phone,
      description: userRecord.description,
      date:userRecord.d,
      active:userRecord.active
    });
  };

  const handleForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const id = formElements.id.value;
    const name = formElements.name.value;
    const email = formElements.email.value;
    const phone = formElements.phone.value;
    const description = formElements.description.value;
    const d = new Date().toDateString();
    const active = false
    const userRecord = { id, name, email, phone, description, d, active};

    if (validateEmail(email) && validateName(name) && validatePhone(phone)) {
      setIsFormValid(true);
      addIssue(activeIssues, userRecord);
      await storeIssue(userRecord);
      event.target.reset();
      setIsFormValid(false);
      toggleModalForm(isModalFormOpen);
    }
  };
  return (
    <ModalBox active={isModalOpen}>
      <ModalText>Fill the form below</ModalText>
      <IssueForm onSubmit={handleForm}>
        <input placeholder="Customer ID" type={"text"} name={"id"} />
        <input placeholder={"Full name"} type={"text"} name={"name"} />
        <input placeholder="Email" type={"email"} name={"email"} />

        <input placeholder="Phone Number" type={"tel"} name={"phone"} />
        <textarea placeholder="Description" name={"description"} />
        <ModalLink disabled={isFormValid}> Send issue</ModalLink>
      </IssueForm>
    </ModalBox>
  );
};

export default ModalForm;
