import React, { useState } from "react";
import { ModalText, ModalLink } from "../../../Modal/ModalStyles";
import { IssueForm, ModalBox } from "./ModalFormStyles";
import { useSelector, useDispatch } from "react-redux";
import { RootStateOrAny } from "react-redux";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../../Auth/validation";
import * as ActionCreators from "../../../../state/actions/actionCreators";
import { bindActionCreators } from "redux";

const ModalForm = () => {
  const isModalOpen = useSelector(
    (state: RootStateOrAny) => state.isModalFormOpen
  );
  const activeIssues = useSelector(
    (state: RootStateOrAny) => state.activeIssues
  );
  const dispatch = useDispatch();
  const [isFormValid, setIsFormValid] = useState(false);
  const { addIssue } = bindActionCreators(ActionCreators, dispatch);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const id = formElements.id.value;
    const name = formElements.name.value;
    const email = formElements.email.value;
    const phone = formElements.phone.value;
    const description = formElements.description.value;
    const userRecord = { id, name, email, phone, description };

    if (validateEmail(email) && validateName(name) && validatePhone(phone)) {
      setIsFormValid(true);
      addIssue(activeIssues, userRecord);
      event.target.reset();
      setIsFormValid(false);
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
