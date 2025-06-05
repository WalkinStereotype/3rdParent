import { html } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";
import { define, View, Form } from "@calpoly/mustang";

import { Skill } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class SkillListViewElement extends View<Model, Msg> {
    static uses = define({
        "mu-form": Form.Element
    });

    @property({ attribute: "user-id"})
    userid?: string;

    @property()
    mode = "view";

    @state()
    get skillList(): Skill[] | undefined {
        return this.model.skills
    }

    constructor() {
        super("bigbrother:model");
    }

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

    attributeChangedCallback(
        name: string, 
        oldValue: string, 
        newValue: string
    ) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (
            name === "user-id" &&
            oldValue !== newValue &&
            newValue
        ) {
            this.dispatchMessage([
                "skill/index",
                { userid: newValue }
            ]);
        } 
    }

    static styles = [
        reset.styles,
        page.styles,
        searchbar.styles
    ];
}