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
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  max-height: 100vh;
`;

export const MessageWrapper = styled.section`
  background-image: url(${pattern});
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
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
  font-family: "Quicksand", sans-serif;
  color: #ffca20;
  font-size: 3rem;
  font-weight: lighter;
  text-align: center;

  @media only screen and (min-width: 700px) {
    font-size: 5.5rem;
  }
`;

export const AuthDescription = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  margin-top: 0.5rem;
  padding: 0 1rem;

  @media only screen and (min-width: 700px) {
    font-size: 2rem;
    padding: 0 7rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  padding: 0.6rem;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  input {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: #f3f3bd;
    font-family: "Quicksand", sans-serif;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 18px;
    padding: 0.5rem 0.5rem 0.5rem 1.3rem;
    font-size: 0.8rem;
    border: none;
  }
  input::placeholder {
    color: #000;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 700px) {
    font-size: 2.5rem;
    padding-top: 1.5rem;
    padding-left: 8rem;
    padding-right: 8rem;

    input {
      height: 2.5rem;
      background-size: 22px;
      padding-left: 1.8rem;
      font-size: 1.3rem;
      box-sizing: border-box;
    }

    input::placeholder {
      font-size: 1.8rem;
      margin-top: 0.8rem;
    }
  }
  @media only screen and (min-width: 1025px) {
    input {
      height: 2.8rem;
      font-size: 1.5rem;
      padding-top: 1rem;
    }

    padding-left: 25rem;
    padding-right: 25rem;
    font-size: 2rem;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media only screen and (min-width: 700px) {
    justify-content: center;
  }
`;

export const FNameInput = styled.input`
  background-image: url(${FNameIcon});
  flex: 1 1 auto;
  margin-right: 1rem;
`;

export const LNameInput = styled.input`
  background-image: url(${LNameIcon});
  flex: 1 1 auto;
`;

export const EmailInput = styled.input`
  background-image: url(${Email});
`;

export const PasswordInput = styled.input`
  background-image: ${(props: PropsAuth) =>
    props.background ? `url(${PIcon})` : `url(${PIconRepeat})`};
`;

export const ImageAuth = styled.img`
  width: 200px;
`;

export const FooterLink = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #000;

  &:hover {
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }

  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const LinkDescription = styled.p`
  font-size: 1rem;
  text-align: center;

  padding-right: 0.33rem;
  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-bottom: 0.5rem;
  @media only screen and (min-width: 700px) {
    padding-bottom: 1rem;
  }
`;

export const AuthButton = styled.button`
  font-family: "Quicksand", sans-serif;
  border: none;
  font-size: 1rem;
  background-color: #ccc;
  color: #000;
  padding: 0.5rem;
  font-weight: bolder;
  filter: drop-shadow(1px 1px 1px #ffffff);
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};

  &:hover {
    background-color: ${(props) => (!props.disabled ? "#ffca20" : "ccc")};
    transition: 0.4s ease-in-out;
  }

  @media only screen and (min-width: 700px) {
    margin-bottom: 2rem;
    font-size: 2rem;
    padding: 1rem;
  }
`;
