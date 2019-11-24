import { createGlobalStyle } from "styled-components";

import { clrBg, clrTxt, clrBg2, spacing } from "utilities";

export const GlobalStyle = createGlobalStyle`
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
        color: ${clrTxt}
    }

    footer, header {
        background: ${clrBg2};
        padding: ${spacing.md} 0;
    }
`;
