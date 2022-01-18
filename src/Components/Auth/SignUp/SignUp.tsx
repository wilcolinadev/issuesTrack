import React, {useState} from "react";
import {
    AuthCard, AuthDescription, AuthWrapper, WelcomeMessage,
    FNameInput, EmailInput, LNameInput, PasswordInput, Form, MessageWrapper, GridCentered, NameWrapper
} from "../AuthStyles";

const [firstName, setFirstName] = useState("");
const [lastName, LastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordValidation, setPasswordValidation] = useState("")
const [isFormValidated, setIsFormValidated] = useState(false);



const SignUp =()=>(
    <AuthWrapper>
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
                                onChange={event => setFirstName(event.target.value)}/>

                    <LNameInput placeholder="Last Name"
                                value={lastName}/>
                </NameWrapper>

                <EmailInput placeholder="Email"
                            value={email} />

                <PasswordInput placeholder="Password"
                               background={true}
                               value={password}/>

                <PasswordInput placeholder="Repeat Password"
                               value={passwordValidation} />

            </Form>
        </AuthCard>

    </AuthWrapper>

);

export default SignUp;