import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import useLocalStorage from "../../../hooks/useLocalStorage";

import Modal from "../../Modal/Modal";
import { Backdrop } from "../../Backdrop/Backdrop";
import { inputValidation, passwordVerification } from "../validation";
import {
  AuthButton,
  AuthCard,
  AuthDescription,
  AuthWrapper,
  EmailInput,
  FNameInput,
  FooterLink,
  Form,
  GridCentered,
  LinkDescription,
  LinkWrapper,
  LNameInput,
  MessageWrapper,
  NameWrapper,
  PasswordInput,
  WelcomeMessage,
} from "../AuthStyles";

import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const SignUp: React.FC = () => {
  useLocalStorage();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [isFormValidated, setIsFormValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const registerUser = (event) => {
    event.preventDefault();
    setIsLoading(!isLoading);
    createUserWithEmailAndPassword(auth, email, password)
      .then((createdUser) => {
        console.log(createdUser);
        updateProfile(createdUser.user, {
          displayName: firstName + " " + lastName,
        }).then(() => {
          setIsLoading(false);
          setModalMessage("Sign up sucessfully!");
          setIsModalOpen(true);
        });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setModalMessage(err.message);
        setIsModalOpen(true);
      });
  };

  // const storeUser = (userId, name, email) => {
  //   const db = getDatabase();
  //   return set(ref(db, "users/" + userId), {
  //     username: name,
  //     email: email,
  //   });
  // };

  useEffect(() => {
    if (
      inputValidation(firstName, lastName, email) &&
      passwordVerification(password, passwordValidation)
    ) {
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
    }
  }, [
    firstName,
    lastName,
    email,
    password,
    passwordValidation,
    isFormValidated,
  ]);

  return (
    <AuthWrapper>
      <Modal active={isModalOpen} message={modalMessage} />
      {isModalOpen && <Backdrop onClick={() => setIsModalOpen(!isModalOpen)} />}
      <Spinner loading={isLoading} />
      <MessageWrapper>
        <GridCentered>
          <WelcomeMessage>Create Account</WelcomeMessage>
          <AuthDescription>
            Complete the form below and have access to our platform.
          </AuthDescription>
        </GridCentered>
      </MessageWrapper>

      <AuthCard>
        <Form onSubmit={registerUser}>
          <NameWrapper>
            <FNameInput
              placeholder={"First Name"}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <LNameInput
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </NameWrapper>

          <EmailInput
            placeholder="Email"
            value={email}
            type={"email"}
            onChange={(event) => setEmail(event.target.value)}
          />

          <PasswordInput
            placeholder="Password"
            background={true}
            value={password}
            type={"password"}
            onChange={(event) => setPassword(event.target.value)}
          />

          <PasswordInput
            placeholder="Repeat Password"
            value={passwordValidation}
            type={"password"}
            onChange={(event) => setPasswordValidation(event.target.value)}
          />

          <AuthButton disabled={!isFormValidated}>Submit</AuthButton>

          <LinkWrapper>
            <LinkDescription>Already signed up?</LinkDescription>

            <Link to={"/Login"}>
              <FooterLink>Log in here!</FooterLink>
            </Link>
          </LinkWrapper>
        </Form>
      </AuthCard>
    </AuthWrapper>
  );
};

// @ts-ignore
export default SignUp;
