import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
        font-family: 'Raleway', sans-serif;
    }

    span {
        color: rgb(218,165,32);
        font-family: 'Merriweather', serif;
    }
`;

export default GlobalStyle;
