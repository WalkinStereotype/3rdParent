import { css } from "lit";

const styles = css`
    .main {
        flex: 1;
        background-color: var(--color-background-page);
        padding: 1rem;
    }

    .container {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-areas: "left middle";
        height: 100vh; /* full screen height */
    }

    body {
        color: var(--color-text); 
        background-color: var(--color-background-page);       
        font-family: var(--font-text);
        font-optical-sizing: auto;
        font-weight: 500; /* 400 - 700 */
        font-style: normal;
        margin: 0;                
        padding: 0;
    }

    h1 {
        color: inherit;
        font-size: 1.8 rem;  
    }

    h2, h3, h4, h5, h6 {
        color: inherit; 
    }

    a {
        color: var(--color-text-header);
        text-decoration: underline; 
        font-weight: normal;   
    }

    a:hover {
        font-weight: bold;     
    }

    svg.nav-icon {
        display: inline;
        height: 2em;
        width: 2em;
        vertical-align: top;
        fill: currentColor;
    }

    svg.icon {
        display: inline;
        height: 2em;
        width: 2em;
        vertical-align: top;
        fill: currentColor;
    }

    @media (max-width: 900px) {
        .container {
            display: grid;
            grid-template-columns: 80px 1fr;
            grid-template-areas: "left middle";
            height: 100vh; 
        }
    }

`;

export default { styles };