import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";

type Todo = {
    title: string;
    svg: string;
    href: string;
}

export class TodoListIndexElement extends LitElement {
    @property()
    src?: string;

    @state()
    todos: Array<Todo> = [];

    render() {
        function renderTodo(p: Todo){
            return html `
                <task-todo 
                    href=${p.href} 
                    title=${p.title}
                    svg-src=${p.svg}
                >
                    <button slot="action" onclick="event.stopPropagation()">Done?</button>
                </task-todo>
            `;
        }

        return html`
            <h2>In Progress...</h2>
            <br>
            ${this.todos.map(renderTodo)}
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
                    const todos = json as Array<Todo>;
                    this.todos = todos;
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