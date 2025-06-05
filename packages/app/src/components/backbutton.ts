import { html, css, LitElement } from "lit";

import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";

export class BackButtonElement extends LitElement {
    render() {
        return html`
            <button @click=${this.handleBack}>
            <svg class="icon">
                <use href="/icons/sprite.svg#icon-back"></use>
            </svg>
            <span style="font-size: 1.7rem;">Back</span>
            </button>
        `;
    }

    handleBack() {
        if (window.history.length > 1) {
            window.history.back(); 
        } else {
            window.location.href = "/app"; 
        }
    }

    static styles = [
        reset.styles,
        page.styles,
        css `
            button {
                background: transparent;
                border: none;
                color: var(--color-text); 
                font-family: var(--font-text);
                font-size: 1rem;
                display: inline-flex;
                align-items: center;
                gap: 0.1rem;
                cursor: pointer;
                padding: 0.5rem;
                transition: font-weight 0.2s ease;
            }

            button:hover {
                font-weight: bold;
            }

            .icon {
                width: 1em;
                height: 1em;
                fill: currentColor;
                display: inline-block;
            }
        `
    ];
}