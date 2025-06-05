import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";
import { define, Form } from "@calpoly/mustang";

export class SkillListViewElement extends LitElement {
    static uses = define({
        "mu-form": Form.Element
    });

    @property({ attribute: "user-id"})
    userid?: string;

    @property()
    mode = "view";

    get src() {
        return '/api/skills/';
    }

    render() {
        return html`
            <div class="main">
                <div class="searchbar">Search...</div>
                <skill-list src=${this.src}></skill-list>
            </div>
        `
    }

    static styles = [
        reset.styles,
        page.styles,
        searchbar.styles
    ];
}