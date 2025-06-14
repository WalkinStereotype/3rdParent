import { html, css } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";
import { define, Form, View } from "@calpoly/mustang";

import { Skill } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

import { capitalizeFirstLetter } from "../scripts/capitalize-word.ts";

interface Resource {
    type: {type: string};
    label: string;
    url: string;
}

export class SkillExpandViewElement extends View<Model, Msg> {
    static uses = define({
        "mu-form": Form.Element
    });

    @property({ attribute: "user-id"})
    userid?: string;

    @property({ attribute: "skill-id"})
    skillid?: string;

    @state()
    get skill(): Skill | undefined {
        return this.model.skills?.find(skill => skill._id === this.skillid);
    }

    constructor() {
        super("bigbrother:store");
    }

    render() {
        const resources = this.skill ? this.skill.resources : [];

        function renderResource(resource: Resource){
            return html `
                <a 
                    class="resource" 
                    href=${resource.url}
                    target="_blank"
                >
                    ${resource.type}: ${resource.label}
                </a>
                <br>
            `
        }

        return html`
            <div class="main">
                <div class="searchbar">Search...</div>
                <back-button></back-button>
                
                <skill-expand 
                    user-id=${this.userid}
                    skill-id=${this.skillid}
                    title=${this.skill?.title} 
                    category=${capitalizeFirstLetter(this.skill?.category ? this.skill.category : "")}
                    cat-color=skill--${this.skill?.category ? this.skill.category : ""}
                    icon=${(this.skill?.category ? this.skill.category : "").substring(0,1).toUpperCase()}
                >
                    <div slot="description">${this.skill?.description}</div>
                    <button slot="favorite" class="skill-expand-favorite-btn" onclick="event.stopPropagation()">Star</button>
                    <div slot="resources">
                        ${(resources as Array<Resource>).map(renderResource)}
                    </div>
                </skill-expand>
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
            name === "skill-id" &&
            oldValue !== newValue &&
            newValue
        ) {
            this.dispatchMessage([
                "skill/select",
                { skillid: newValue }
            ]);
        }
    }

    static styles = [
        reset.styles,
        page.styles,
        searchbar.styles,
        css`  
            .skill-expand-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }

            a.resource {
                color: var(--color-link);
                font-style: italic;
            }
            a.resource:hover {
                font-weight: bold;
                color: var(--color-link-hover);
            }
        `
    ];
}