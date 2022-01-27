import React from "react";
import {ModalBox, ModalProps, ModalText} from "./ModalStyles";



const Modal:React.FC <ModalProps> = ({active,message})=>(

    <ModalBox active={active}>
        <ModalText> {message}</ModalText>

    </ModalBox>
);

export default Modal;