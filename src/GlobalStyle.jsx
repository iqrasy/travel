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

    body {
        background-color: #f7ede2;
    }

    h2, h1, h3, button, p{
        color: #0d1b2a;
    }

    span {
        color: rgb(218,165,32);
        font-family: 'Merriweather', serif;
    }
`;

export default GlobalStyle;
