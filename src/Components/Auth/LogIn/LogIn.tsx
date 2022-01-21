import React, {useState} from "react";
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


const Login: React.FC = () =>{


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValidated, setIsFormValidated] = useState(false);

    return(
        <AuthWrapper>
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
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}

                    />


                    <PasswordInput placeholder="Password"
                                   background={true}
                                   value={password}
                                   onChange={(event)=> setPassword(event.target.value)}
                    />



                    <AuthButton>
                        Submit
                    </AuthButton>

                    <LinkWrapper>
                        <LinkDescription >
                            Already signed up?

                        </LinkDescription >

                        <Link to={"/Signup"}>
                            <FooterLink>
                                Sign up here!
                            </FooterLink>
                        </Link>
                    </LinkWrapper>

                </Form>


            </AuthCard>

        </AuthWrapper>

    )};

export default Login;