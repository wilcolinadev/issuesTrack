import React, {useState, useEffect} from "react";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db} from "../../../Firebase/firebase";
import {getDatabase, set, ref} from "firebase/database";
import Modal from "../../Modal/Modal";
import {Backdrop} from "../../Backdrop/Backdrop";

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
import Spinner from "../../Spinner/Spinner";



const SignUp:React.FC =()=>{

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordValidation, setPasswordValidation] = useState("");
const [isFormValidated, setIsFormValidated] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [modalMessage, setModalMessage] = useState("");

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
        createUserWithEmailAndPassword(auth,email, password)
        .then(createdUser=>{

            console.log(createdUser);
            updateProfile(createdUser.user,{
                displayName:firstName+" "+lastName
            }).then(()=>{
                storeUser(createdUser.user.uid, createdUser.user.displayName, createdUser.user.email).
                    then(()=>{
                    console.log("user name Updated and stored in database");
                    setIsLoading(false);
                    setModalMessage("Sign up sucessfully!");
                    setIsModalOpen(true);
                }).catch(err=>{
                    console.log(err);
                    setModalMessage(err.message);
                    setIsModalOpen(true);
                })


            }).catch((err)=>{

                console.log(err)
                setIsLoading(false);
                setModalMessage(err.message);
                setIsModalOpen(true);
            })


        }).catch((err)=>{

            console.log(err);
            setIsLoading(false);
            setModalMessage(err.message);
            setIsModalOpen(true);
        })
};

const storeUser =(userId, name, email)=>{
    const db = getDatabase();
    return set(ref(db,'users/'+ userId),{
        username: name,
        email: email,
    })
}

useEffect(()=>{

    if (inputValidation() && passwordVerification()){
        setIsFormValidated(true);
    }else{
        setIsFormValidated(false);
    }

},[firstName, lastName, email, password, passwordValidation,isFormValidated])



return(
    <AuthWrapper>
        <Modal active={isModalOpen} message={modalMessage}/>
        {(isModalOpen) && <Backdrop  onClick={()=>setIsModalOpen(!isModalOpen)}/>}
        <Spinner loading={isLoading} />
        <MessageWrapper>
            <GridCentered>
                <WelcomeMessage >
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

                <AuthButton disabled={!isFormValidated} onClick={registerUser} >
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