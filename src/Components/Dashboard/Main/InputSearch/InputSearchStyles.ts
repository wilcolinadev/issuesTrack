import styled from "styled-components";

export const FormBox = styled.div`
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
  }

  form {
    height: auto;
    width: 450px;
    padding: 0.7rem;
    background-color: #f3f3bd;
    border-radius: 10px;
    box-shadow: 0 5px 20px #b9b6b6, 0 0 0 10px #ffffffeb;
    transform: scale(0.6);
  }

  input[type="text"] {
    width: 100%;
    height: 50px;
    font-size: 30px;
  }

  input[type="text"]::placeholder {
    color: #aaaaaa;
    font-size: 30px;
  }

  button {
    position: relative;
    display: block;
    height: auto;
    cursor: pointer;
    font-size: 2.5rem;
  }
`;
