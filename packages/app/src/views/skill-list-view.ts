import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";
// import { define, Form, View, Auth, Observer } from "@calpoly/mustang";
import { define, Form, View } from "@calpoly/mustang";

import { Skill, Interest } from "server/models";
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
    get skills(): Array<Skill> | undefined {
        return this.model.skills;
    }

    @state()
    get interests(): Array<Interest> | undefined {
        return this.model.interests;
    }

    constructor() {
        super("bigbrother:store");
    }
    
    render() {
        // if (!this.skills || !this.interests) return html`<p>Loading...</p>`;

        // Get IDs of interested skills
        const interestSkillIDs = new Set(this.interests?.map(i => i.skillID));

        console.log("interestSkillIDs:", interestSkillIDs);

        // Separate skills into interested and the rest
        const interestedSkills = 
            this.skills?.filter(
                skill => 
                    interestSkillIDs.has(
                        skill._id ? skill._id : ""
                    )
            );
        const otherSkills = 
            this.skills?.filter(
                skill => 
                    !interestSkillIDs.has(
                        skill._id ? skill._id : ""
                    )
            );

        function renderButton(interested: boolean){
            if (interested){
                return html `<button slot="action" class="skill-btn" onclick="event.stopPropagation()">Star</button>`;
            } 

            return `<button slot="action" class="skill-btn" onclick="event.stopPropagation()">Unstar</button>`;
        }

        function renderSkill(s: Skill, userid: string, interested: boolean){
            return html `
                <skill-yuh
                    href="/app/skills/${userid}/${s._id}"
                    cat-color="skill--${s.category}"
                    icon=${s.category}
                    title=${s.title}
                >
                    ${renderButton(interested)}
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
                    ${interestedSkills?.map(skill => renderSkill(skill, this.userid ? this.userid : "guest", true))}
                    ${otherSkills?.map(skill => renderSkill(skill, this.userid ? this.userid : "guest", false))}
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
        console.log("oldvalue", oldValue, "newvalue", newValue, name);
        if (
            name === "user-id" &&
            oldValue !== newValue &&
            newValue
        ) {
            this.dispatchMessage([
                "skill/index",
                { userid: newValue }
            ]);

            this.dispatchMessage([
                "interest/index",
                { userid: newValue }
            ]);
        }
        console.log("Inside skill-list attribute callback");
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