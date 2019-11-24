import { createGlobalStyle } from "styled-components";

import { clrBg, clrTxt, clrBg2, spacing } from "utilities";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat|Tomorrow&display=swap');

    /* Reset */
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    /* Set up document flow */
    html, body, #root {
        min-height: 100vh;
    }
    #root {
        display: flex;
        flex-direction: column;
        background: ${clrBg};
        color: ${clrTxt};
        font-family: Montserrat, sans-serif;
    }

    footer, header {
        background: ${clrBg2};
        padding: ${spacing.md} 0;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: Tomorrow, sans-serif;
    }
`;
