import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";
import page from "./scripts/styles/page.css.ts";

type Recent = {
    title: string;
    href: string;
}

export class RecentsElement extends LitElement {
    @property()
    src?: string;

    @state()
    recents: Array<Recent> = [];

    render() {
        function renderRecent(r: Recent){
            return html `
                <a href=${r.href}>${r.title}</a>
            `;
        }

        return html`
            <div class="container">
                <h3>Recent Accomplishments</h3>
                <br>
                ${this.recents.map(renderRecent)}
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.hydrate(this.src);
    }

    hydrate(src: string) {
        fetch(src)
            .then(res => res.json())
            .then((json: object) => {
                if(json) {
                    const recents = json as Array<Recent>;
                    this.recents = recents;
                }
            })
    }

    static styles = [
        reset.styles,
        page.styles,
        css`        
            .container {
                display: flex;
                flex-direction: column;
                text-align: center;
            }

            a {
                color: var(--color-link);
                font-style: italic;
            }
            a:hover {
                color: var(--color-link-hover);
            }
        `
    ];
}