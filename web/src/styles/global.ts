import { DefaultTheme, ThemeProps, createGlobalStyle } from "styled-components";

interface MyTheme extends DefaultTheme {
  background: string;
  text: string;
  primary: string;
}

export const TemaPadrao: MyTheme = {
  background: "#292F36",
  text: "#F7FFF7",
  primary: "#4ECDC4",
};

const GlobalStyle = createGlobalStyle<ThemeProps<MyTheme>>`
  *{
    margin: 0;
    padding: 4px;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%
  }

  body {
    background: ${(MyTheme) => MyTheme.background};
    color: ${(MyTheme) => MyTheme.text};;
    overflow-x: hidden;

    /* width */
::-webkit-scrollbar {
  width: 1rem;
}

  }

  body * {
    font-family: 'Inter', Sans-Serif;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
