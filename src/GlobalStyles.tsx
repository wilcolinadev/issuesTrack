import {createGlobalStyle} from "styled-components";
import background from "./assets/sun-tornado.svg"
export const GlobalStyles = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  body {

    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
    background-image: url(${background});

    background-position: center;
    height: auto;
    background-size: cover;
    min-height: 100vh;
    position: relative;
  }



  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;