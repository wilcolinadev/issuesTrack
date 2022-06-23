import React, {useState} from "react";
import {ModalBox} from "./CardStyles";
import {useSelector, useDispatch} from "react-redux";
import { RootStateOrAny } from "react-redux";
import {bindActionCreators} from "redux";
import * as ActionCreators from "../../../state/actions/actionCreators"

const Card:React.FC=()=>{
    const activeIssue = useSelector((state:RootStateOrAny) =>state.activeIssue);
    const isCardActive = useSelector((state:RootStateOrAny)=>state.isCardActive);
    const dispatch = useDispatch();
    const {toggleActiveCard} = bindActionCreators(ActionCreators,dispatch);

    return(
        <ModalBox active={isCardActive}>
            <h1>Card</h1>
            <p>ID</p>
            <p>{activeIssue.id}</p>
             <p>Name</p>
            <p>{activeIssue.name}</p>
            <p>Description</p>
            <p>{activeIssue.description}</p>
            <p>Email</p>
            <p>{activeIssue.email}</p>
            <p>Phone number</p>
            <p>{activeIssue.phone}</p>
           <p>Date</p>
            <p>{activeIssue.date}</p>
            <button onClick={()=>toggleActiveCard()} >Close</button>
        </ModalBox>
    )
}

export default Card