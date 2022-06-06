import React, { useEffect, useState } from "react";
import { auth } from "../../../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Spinner from "../../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import {
  AuthCard,
  AuthDescription,
  AuthWrapper,
  WelcomeMessage,
  EmailInput,
  PasswordInput,
  Form,
  MessageWrapper,
  GridCentered,
  FooterLink,
  AuthButton,
  LinkDescription,
  LinkWrapper,
} from "../AuthStyles";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";
import { Backdrop } from "../../Backdrop/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../state/actions/actionCreators";
import { RootStateOrAny } from "react-redux";
import { useLocation } from "react-router";
import { isEmpty } from "../../objectValidation";
import { validateEmail } from "../validation";

const Login: React.FC = () => {
  //Bringing the redux state
  const userState = useSelector((state: RootStateOrAny) => state.isUserAuth);
  //Bringing the Actions
  const dispatch = useDispatch();
  const { logUserIn, logUserOut } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValidated, setIsFormValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const passwordVerification = (): boolean | void => {
    if (password.length > 6) {
      return true;
    }
  };

  const redirectUser = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    if (validateEmail(email) && passwordVerification()) {
      setIsFormValidated(true);
    } else {
      setIsFormValidated(false);
    }
  }, [email, password]);

  useEffect(() => {
    if (!isEmpty(userState)) {
      redirectUser();
    }
  }, [userState, location]);

  const authUser = (event) => {
    event.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((signedUser) => {
        logUserIn(signedUser);
        console.log(signedUser);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setModalMessage(err.message);
        setIsModalOpen(true);
      });
  };

  return (
    <AuthWrapper>
      <Spinner loading={isLoading} />
      <Modal active={isModalOpen} message={modalMessage}>
        {" "}
      </Modal>
      {isModalOpen && <Backdrop onClick={() => setIsModalOpen(!isModalOpen)} />}
      <MessageWrapper>
        <GridCentered>
          <WelcomeMessage>Log in here</WelcomeMessage>

          <AuthDescription>
            Enter your credentials and have access to IssuesTrack
          </AuthDescription>
        </GridCentered>
      </MessageWrapper>

      <AuthCard>
        <Form onSubmit={authUser}>
          <EmailInput
            placeholder="Email"
            type={"email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <PasswordInput
            placeholder="Password"
            type={"password"}
            background={true}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <AuthButton disabled={!isFormValidated}>Submit</AuthButton>

          <LinkWrapper>
            <LinkDescription>Already signed up?</LinkDescription>

            <Link to={"/Signup"}>
              <FooterLink>Sign up here!</FooterLink>
            </Link>
          </LinkWrapper>
        </Form>
      </AuthCard>
    </AuthWrapper>
  );
};

export default Login;
