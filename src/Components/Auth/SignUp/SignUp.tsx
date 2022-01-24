import React, {useState, useEffect} from "react";
import {
    AuthCard,
    AuthDescription,
    AuthWrapper,
    WelcomeMessage,
    FNameInput,
    EmailInput,
    LNameInput,
    PasswordInput,
    Form,
    MessageWrapper,
    GridCentered,
    NameWrapper,
    FooterLink,
    AuthButton,
    LinkDescription, LinkWrapper
} from "../AuthStyles";
import {Link} from "react-router-dom";
import firebase from "../../../Firebase/firebase";
import Spinner from "../../Spinner/Spinner";


const SignUp =()=>{

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordValidation, setPasswordValidation] = useState("");
const [isFormValidated, setIsFormValidated] = useState(false);
const [isLoading, setIsLoading] = useState(false);



const inputValidation = (): boolean | void => {
       if (firstName.length > 2 && lastName.length >> 2 && email.length > 2 ){
        return true;
    }

};

const passwordVerification = (): boolean | void =>{
    if ( password.length > 6 && password === passwordValidation){
        return true
    }
}

const registerUser = (event) =>{
    event.preventDefault();
    setIsLoading(!isLoading);

};

useEffect(()=>{

    if (inputValidation() && passwordVerification()){
        setIsFormValidated(true);
    }else{
        setIsFormValidated(false);
    }

},[firstName, lastName, email, password, passwordValidation,isFormValidated])



return(
    <AuthWrapper>
        <Spinner loading={isLoading}/>
        <MessageWrapper>
            <GridCentered>
                <WelcomeMessage>
                    Create Account
                </WelcomeMessage>

                    <AuthDescription>
                        Complete the form below and have access to our platform.
                    </AuthDescription>


            </GridCentered>

        </MessageWrapper>

        <AuthCard>
            <Form>
                <NameWrapper >

                    <FNameInput placeholder={"First Name"}
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}/>

                    <LNameInput placeholder="Last Name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                />
                </NameWrapper>

                <EmailInput placeholder="Email"
                            value={email}
                            type={"email"}
                            onChange={(event) => setEmail(event.target.value)}

                />


                <PasswordInput placeholder="Password"
                               background={true}
                               value={password}
                               type={"password"}
                               onChange={(event)=> setPassword(event.target.value)}
                />

                <PasswordInput placeholder="Repeat Password"
                               value={passwordValidation}
                               type={"password"}
                               onChange={(event)=> setPasswordValidation(event.target.value)}
                />

                <AuthButton disabled={!isFormValidated}>
                    Submit
                </AuthButton>

                <LinkWrapper>
                    <LinkDescription >
                        Already signed up?

                    </LinkDescription >

                    <Link to={"/Login"}>
                        <FooterLink>
                            Log in here!
                        </FooterLink>
                    </Link>
                </LinkWrapper>

            </Form>


        </AuthCard>

    </AuthWrapper>

)};

export default SignUp;