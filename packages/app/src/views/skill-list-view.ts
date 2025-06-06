import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";
import { define, Form, View } from "@calpoly/mustang";

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
    // get skills(): Array<Skill> | undefined {
    //     return this.model.skills;
    // }
    skills: Array<Skill> = [];

    get src() {
        return '/api/skills/list';
    }

    constructor() {
        super("bigbrother:model");
    }

    render() {
        function renderSkill(s: Skill){
            return html `
                <skill-yuh
                    href="/app/skills/${s._id}"
                    cat-color="skill--${s.category}"
                    icon=${s.category}
                    title=${s.title}
                >
                    <button slot="action" class="skill-btn" onclick="event.stopPropagation()">Star</button>
                </skill-yuh>
            `
        }

        console.log("Rendering skills:", this.skills);

        return html`
            <div class="main">
                <div class="searchbar">Search...</div>
                <div>
                    <h2>Skills</h2>
                    <br>
                    ${this.skills?.map(renderSkill)}
                </div>
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

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.hydrate(this.src);
    }

    hydrate(src: string) {
        fetch(src)
        .then(res => console.log("hi", res));

        fetch(src)
        .then(res => res.json())
        .then((json: object) => {
            if(json) {
                const skillList = json as Array<Skill>;

                this.skills = skillList;
            }
        });
    }

    static styles = [
        reset.styles,
        page.styles,
        searchbar.styles,
        css`        
            .skill-btn {
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