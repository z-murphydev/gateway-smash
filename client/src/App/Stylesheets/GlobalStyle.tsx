import { createGlobalStyle } from "styled-components";

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
    }
`;
