import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";

export class LogViewElement extends LitElement {
    @property({ attribute: "user-id"})
    userid?: string;

    // get src() {
    //     return 'api/skills';
    // }

    render() {
        return html`
            <div class="main">
                <div class="searchbar">Search...</div>
                <log-yuh src="/data/log.json"></log-yuh>
            </div>
        `
    }

    static styles = [
        reset.styles,
        page.styles,
        searchbar.styles
    ];
}