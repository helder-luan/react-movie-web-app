import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: #dc5cff;
    transition: 0.5s;
    :hover {
      color: #b638d9;
    }
  }


  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
