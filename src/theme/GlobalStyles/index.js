import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.azulClaro}
  }
  ${normalize}
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

`;
export default GlobalStyle;

export const colors = {
  azul: "#8AC6FD",
  azulClaro: "#f0ffff",
  verdeAgua: "#7bffff",
  branco: "#fff",
  rosa: "#ffa5ae",
  rosaClaro: "#ffd7df",
  cinzaClaro: "#efefef",
  laranja: "#fe5f55",
  marrom: "#311e10",
};
