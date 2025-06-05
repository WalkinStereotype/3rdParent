import { css } from "lit";

const styles = css`
    .container {
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-template-areas: "middle right";
        height: 100vh; /* full screen height */
    }

    .main {
        flex: 1;
        background-color: var(--color-background-page);
        padding: 1rem;
        grid-area: middle;
    }

    .extra {
        width: 300px;
        background-color: var(--color-background-page);
        padding: 1rem;
        grid-area: right;
    }

    @media (max-width: 750px) {
        .container {
            grid-template-columns: 1fr; 
            grid-template-rows: auto auto; 
            grid-template-areas:
                "middle"
                "right";
        }
        
        .main {
            grid-area: middle;
        }
        
        .extra {
            grid-area: right;
        }
    }
`;

export default { styles };