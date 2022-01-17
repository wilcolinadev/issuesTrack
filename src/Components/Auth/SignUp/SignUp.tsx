import React from "react";
import {
    AuthCard, AuthDescription, AuthWrapper, WelcomeMessage,
    FNameInput, EmailInput, LNameInput, PasswordInput, Form, MessageWrapper, GridCentered, NameWrapper
} from "../AuthStyles";




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
                <NameWrapper>

                    <FNameInput placeholder={"First Name"}/>
                    <LNameInput placeholder="Last Name"/>
                </NameWrapper>

                <EmailInput placeholder="Email"/>
                <PasswordInput placeholder="Password" background={true} />
                <PasswordInput placeholder="Repeat Password"  />

            </Form>
        </AuthCard>

    </AuthWrapper>

);

export default SignUp;