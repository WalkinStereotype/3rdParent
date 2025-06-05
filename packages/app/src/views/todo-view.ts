import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";

export class TodoViewElement extends LitElement {
    @property({ attribute: "user-id"})
    userid?: string;

    // get src() {
    //     return 'api/skills';
    // }

    render() {
        return html`
            <div class="main">
                <div class="searchbar">Search...</div>
                <todo-list src="/data/todo-list.json"></todo-list>
            </div>
        `
    }

    static styles = [
        reset.styles,
        page.styles,
        searchbar.styles
    ];
}