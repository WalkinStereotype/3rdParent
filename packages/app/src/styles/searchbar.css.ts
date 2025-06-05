import { css } from "lit";

const styles = css`
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
`;

export default { styles };