import React from "react"
import {Image, ModalDiv, ModalWrapper} from "./HModalStyles";
import {BurgerController} from "../HamburgerStyles";
import {Link} from "react-router-dom";
import {ModalLink , LoginIcon, SignUpIcon} from "./HModalStyles";
import logo from "../../../../../assets/IT-removebg-preview.png";


const HamburgerModal:React.FC<BurgerController> = ({open}) => {

    return(
      <ModalWrapper open={open}>
        <ModalDiv>
            <ModalDiv>
                <Link to={"/Login"}>
                    <ModalLink >
                       <LoginIcon/>
                        Log in
                    </ModalLink>
                </Link>
            </ModalDiv>

            <ModalDiv>
                <Link to={"/Signup"}>
                    <ModalLink >
                      <SignUpIcon/>
                        Sign Up
                    </ModalLink>
                </Link>

            </ModalDiv>
        </ModalDiv>


          <ModalLink>
              <Image src={logo} alt={"Issues Track Logo"} />
          </ModalLink>

      </ModalWrapper>

    )
};

export default HamburgerModal;
