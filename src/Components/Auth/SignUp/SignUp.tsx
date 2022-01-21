import React, {useState} from "react";
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


const SignUp =()=>{

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordValidation, setPasswordValidation] = useState("")
const [isFormValidated, setIsFormValidated] = useState(false);

return(
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
                                onChange={(event) => setFirstName(event.target.value)}/>

                    <LNameInput placeholder="Last Name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                />
                </NameWrapper>

                <EmailInput placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}

                />


                <PasswordInput placeholder="Password"
                               background={true}
                               value={password}
                               onChange={(event)=> setPassword(event.target.value)}
                />

                <PasswordInput placeholder="Repeat Password"
                               value={passwordValidation}
                               onChange={(event)=> setPasswordValidation(event.target.value)}
                />

                <AuthButton>
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