import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";
import { define, Form } from "@calpoly/mustang";


export class SkillExpandViewElement extends LitElement {
    static uses = define({
        "mu-form": Form.Element
    });

    @property({ attribute: "user-id"})
    userid?: string;

    @property({ attribute: "skill-id"})
    skillid?: string;

    @property()
    mode = "view";

    get src() {
        return `/api/skills/expand/${this.skillid}`;
    }

    render() {
        return html`
            <div class="main">
                <div class="searchbar">Search...</div>
                <back-button></back-button>
                <skill-expand-wrapper src=${this.src}></skill-expand>
            </div>
        `
    }

    static styles = [
        reset.styles,
        page.styles,
        searchbar.styles
    ];
}