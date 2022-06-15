import React from "react";
import { ModalText, ModalLink} from "../../../Modal/ModalStyles";
import {IssueForm, ModalBox} from "./ModalFormStyles";
import {useSelector} from "react-redux";
import {RootStateOrAny} from "react-redux";

const ModalForm = ()=>{

    const isModalOpen = useSelector((state:RootStateOrAny)=> state.isModalFormOpen);
    return(
        <ModalBox active={isModalOpen}>
            <ModalText>Fill the form below</ModalText>
            <IssueForm >
                <input
                    placeholder="Customer ID"
                    type={"text"}

                />
                <input
                    placeholder={"Full name"}

                />
                <input
                    placeholder="Email"
                    type={"email"}

                />

                <input
                    placeholder="Phone Number"
                    type={"text"}

                />
                <textarea
                    placeholder="Description"


                />
                <ModalLink> Send issue</ModalLink>
            </IssueForm>

        </ModalBox>
    )
}

export default ModalForm;