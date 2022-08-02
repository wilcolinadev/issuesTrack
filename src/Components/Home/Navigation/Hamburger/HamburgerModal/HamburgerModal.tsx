import React from "react";
import {

  LoginIcon,
  ModalDiv,
  ModalLink,
  ModalWrapper,
  SignUpIcon,
} from "./HModalStyles";
import { BurgerController } from "../HamburgerStyles";
import { Link } from "react-router-dom";


const HamburgerModal: React.FC<BurgerController> = ({ open }) => {
  return (
    <ModalWrapper open={open}>
      <ModalDiv>
        <ModalDiv>
          <Link to={"/Login"}>
            <ModalLink>
              <LoginIcon />
              Log in
            </ModalLink>
          </Link>
        </ModalDiv>

        <ModalDiv>
          <Link to={"/Signup"}>
            <ModalLink>
              <SignUpIcon />
              Sign Up
            </ModalLink>
          </Link>
        </ModalDiv>
      </ModalDiv>


    </ModalWrapper>
  );
};

export default HamburgerModal;
