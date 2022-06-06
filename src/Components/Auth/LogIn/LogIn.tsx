import React, {useEffect, useState} from "react";
import {auth} from "../../../Firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import Spinner from "../../Spinner/Spinner";
import {useNavigate} from "react-router-dom";
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
    LinkDescription, LinkWrapper
} from "../AuthStyles";
import {Link} from "react-router-dom";
import Modal from "../../Modal/Modal";
import {Backdrop} from "../../Backdrop/Backdrop";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../../state/actions/actionCreators';
import {RootStateOrAny} from "react-redux";
import {useLocation} from "react-router";

const Login: React.FC = () => {
    //Bringing the redux state
    const state = useSelector((state: RootStateOrAny) => state.isUserAuth);
    //Bringing the Actions
    const dispatch = useDispatch();
    const {logUserIn, logUserOut} = bindActionCreators(actionCreators, dispatch)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValidated, setIsFormValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const emailValidation = (): boolean | void => {
        if (email.length > 2 && email.includes("@")) {
            return true;
        }

    };

    const passwordVerification = (): boolean | void => {
        if (password.length > 6) {
            return true
        }
    }

    const redirectUser = () => {
            navigate('/');
    }


    useEffect(() => {

        if (emailValidation() && passwordVerification()) {
            setIsFormValidated(true);
        } else {
            setIsFormValidated(false);
        }

    }, [email, password])

    useEffect(() => {
        if(state){
            redirectUser();
        }
    }, [state]);


    const logInUser = (event) => {
        event.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(signedUser => {
                logUserIn();
                console.log(signedUser)
                setIsLoading(false);
                setModalMessage("Sign In sucessfully!");
                setIsModalOpen(true);
                console.log(state);
            }).catch((err) => {
            console.log(err);
            setIsLoading(false);
            setModalMessage(err.message);
            setIsModalOpen(true);
        })


    };

    return (
        <AuthWrapper>
            <Spinner loading={isLoading}/>
            <Modal active={isModalOpen} message={modalMessage}> </Modal>
            {(isModalOpen) && <Backdrop onClick={() => setIsModalOpen(!isModalOpen)}/>}
            <MessageWrapper>
                <GridCentered>
                    <WelcomeMessage>
                        Log in here
                    </WelcomeMessage>

                    <AuthDescription>
                        Enter your credentials and have access to IssuesTrack
                    </AuthDescription>


                </GridCentered>

            </MessageWrapper>

            <AuthCard>
                <Form>
                    <EmailInput placeholder="Email"
                                type={'email'}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}

                    />
                    <PasswordInput placeholder="Password"
                                   type={'password'}
                                   background={true}
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}
                    />
                    <AuthButton disabled={!isFormValidated} onClick={logInUser}>
                        Submit
                    </AuthButton>

                    <LinkWrapper>
                        <LinkDescription>
                            Already signed up?

                        </LinkDescription>

                        <Link to={"/Signup"}>
                            <FooterLink>
                                Sign up here!
                            </FooterLink>
                        </Link>
                    </LinkWrapper>

                </Form>


            </AuthCard>

        </AuthWrapper>

    )
};

export default Login;