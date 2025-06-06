import { css } from "lit";

const styles = css`
    .skill-expand {
        display: flex;
        flex-direction: column;
        color: var(--color-text-logo);
        background-color: var(--color-task-todo-background);
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        transition: background-color 0.2s;
    }
    
    .skill-expand-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .skill-expand-category {
        display: flex;
        font-family: var(--font-text);
        font-size: 24px;
        margin-right: 12px;
    }

    .skill-expand-icon {
        font-size: 24px;
        font-weight: bold;
        margin-right: 12px;
    }

    .skill-expand-title {
        flex-grow: 1;
        font-family: var(--font-display);
        font-size: 35px;
        font-weight: bold;
        text-align: left;
        letter-spacing: 0.05em;
    }

    .skill-expand-description {
        flex-grow: 1;
        font-family: var(--font-text);
        font-size: 18px;
        /* font-weight: bold; */
        text-align: left;
    }
    
    .skill-expand-favorite-btn {
        background-color: #C8BEA4;
        border: 1px solid var(--color-border-searchbar);
        padding: 4px 12px;
        border-radius: 24px;
        cursor: pointer;
        font-size: 14px;
    }

    a.resource {
        color: var(--color-link);
        font-style: italic;
    }
    a.resource:hover {
        color: var(--color-link-hover);
    }
`;

export default { styles };