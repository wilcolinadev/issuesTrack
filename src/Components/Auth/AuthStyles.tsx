import styled from "styled-components";
import pattern from "../../assets/sun-tornado.svg";
import LNameIcon from "../../assets/LnameIcon.svg";
import FNameIcon from "../../assets/nameIcon.svg";
import PIconRepeat from "../../assets/passwordIcon.svg";
import PIcon from "../../assets/passwordIconOne.png";
import Email from "../../assets/emailIcon.svg";

interface PropsAuth {
    background?: boolean;
}

export const AuthWrapper = styled.section`
  background-color: #e5e2e2;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2,1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

export const MessageWrapper = styled.section`
  background-image: url(${pattern});
  position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3,1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
 
`;

export const GridCentered = styled.div` 
  grid-area: 2 / 1 / 3 / 2; 
  
`;

export const AuthCard = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  //filter: drop-shadow(1px 1px 1px #6c6c6c);
 
`;

export const WelcomeMessage = styled.h3`
  font-family: 'Quicksand', sans-serif;
  color: #ffca20;
  font-size: 3rem;
  font-weight: lighter;
  text-align: center;
  
`;

export const AuthDescription = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    margin-top: .5rem;
    padding: 0 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  margin-top: .5rem;
  box-sizing: border-box;
  input{
    margin: 1rem;
    padding: .5rem;
    border: none;
    background-color: #F3F3BD;
    font-family: 'Quicksand', sans-serif;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 18px;
    
  }
  input::placeholder{
    color: #000;
    font-size: 1rem;
    padding-left: 1rem;
  }
  
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const FNameInput = styled.input`
 
  background-image: url(${FNameIcon});
  


`;

export const LNameInput = styled.input`
  background-image: url(${LNameIcon});
`;

export const EmailInput = styled.input`
  background-image: url(${Email});
`;


export const PasswordInput = styled.input`
  background-image: ${(props:PropsAuth) => (props.background ) ? `url(${PIcon})` : `url(${PIconRepeat})`
}`;

export const ImageAuth =  styled.img`
  width: 200px;
`;