import React from "react";
import {ModalBox} from "./ModalStyles";

import {ModalProps} from "./ModalStyles";

const Modal:React.FC <ModalProps> = ({active})=>(

    <ModalBox active={active}>
        <h2> Error / Task Completed</h2>
    </ModalBox>
);

export default Modal;