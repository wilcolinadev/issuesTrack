import React from "react";
import {ModalBox, ModalProps, ModalText, ModalLink} from "./ModalStyles";
import {Link} from "react-router-dom";


const Modal:React.FC <ModalProps> = ({active,message})=>(

    <ModalBox active={active}>
        <ModalText> {message}</ModalText>
        <Link to={"/login"}>
            <ModalLink>Log in</ModalLink>
        </Link>
    </ModalBox>
);

export default Modal;