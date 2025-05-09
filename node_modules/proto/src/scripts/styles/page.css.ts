import { css } from "lit";

const styles = css`
    header {
        color: var(--color-text-header);
        background-color: var(--color-background-header);
        font-family: var(--font-display);
        font-weight: 400;
        font-style: normal; 
        margin: 0;                
        padding: 0;
    }

    html {
        margin: 0;
        padding: 0;
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

    body, body * {
    transition: background-color 0.3s ease, color 0.3s ease;
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

    .searchbar {
        display: flex;
        max-width: var(--max-width-main);
        align-items: center;
        justify-content: space-between;
        font-family: var(--font-text);
        color: var(--color-text-searchbar);
        background-color: var(--color-background-searchbar);
        border: 2px solid var(--color-border-searchbar);
        padding: 6px 16px;
        border-radius: 64px;
        margin-bottom: 16px;
    }

    @media (max-width: 900px) {
        .nav-title {
            display: none;
        }
        .nav-user {
            display: none;
        }
        .nav-label {
            display: none;
        }
        .sidebar {
            width: 80px;
        }
    }
`;

export default { styles };