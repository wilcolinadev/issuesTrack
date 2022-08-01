import styled from "styled-components";

export const FormBox = styled.div`
  padding-top: 1rem;
  margin-bottom: 2rem;

  .tb {
    display: table;
    width: 100%;
  }

  .td {
    display: table-cell;
  }

  input,
  button {
    color: #aaaaaa;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    outline: none;
  }

  form {
    height: auto;
    width: 95%;
    padding: 0.7rem;
    background-color: #e2e2df;
    border-radius: 10px;
    box-shadow: 0 2px 10px #b9b6b6, 0 0 0 2px #ffffffeb;
    margin: 0 auto;
    box-sizing: border-box;
  }

  input[type="text"] {
    width: 100%;
    height: auto;
    font-size: 1.2rem;
  }

  input[type="text"]::placeholder {
    color: #aaaaaa;
    font-size: 1.2rem;
  }

  button {
    position: relative;
    display: block;
    height: auto;
    cursor: pointer;
    font-size: 1.5rem;
    left: 5px;
    top: 5px;
  }

  @media only screen and (min-width: 700px) {
    button {
      font-size: 2rem;
      left: 60px;
    }

    form {
      margin: 0 0.4rem;
      width: 98%;
    }
  }

  @media only screen and (min-width: 1000px) {
    button {
      font-size: 2rem;
      left: 20px;
    }

    form {
      margin: 0;
      width: 90%;
    }
  }
`;
