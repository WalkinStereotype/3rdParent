import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";

type Priority = {
    title: string;
    catColor: string;
    icon: string;
    href: string;
    priority: boolean;
}

export class TodoListElement extends LitElement {
    @property()
    src?: string;

    @state()
    highPriorities: Array<Priority> = [];

    @state()
    lowPriorities: Array<Priority> = [];

    render() {
        function renderHighPriority(p: Priority){
            return html `
                <skill-yuh
                href=${p.href}
                cat-color=${p.catColor}
                icon=${p.icon}
                title=${p.title}
                >
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Unprioritize</button>
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
                </skill-yuh>
            `;
        }

        function renderLowPriority(p: Priority){
            return html `
                <skill-yuh
                href=${p.href}
                cat-color=${p.catColor}
                icon=${p.icon}
                title=${p.title}
                >
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Prioritize</button>
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
                </skill-yuh>
            `;
        }

        return html`
            <div class="todo-actual">
                <h2>To-Do</h2>
                <br>
                ${this.highPriorities.map(renderHighPriority)}
            </div>
            <br>
            <br>
            <div class="todo-interested">
                <h2>Interested</h2>
                <br>
                ${this.lowPriorities.map(renderLowPriority)}
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
                    const priorities = json as Array<Priority>;

                    this.highPriorities = priorities.filter(p => p.priority);
                    this.lowPriorities = priorities.filter(p => !p.priority);
                }
            })
    }

    static styles = [
        reset.styles,
        css`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `
    ];
}