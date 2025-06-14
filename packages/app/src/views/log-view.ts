import { html } from "lit";
import { View } from "@calpoly/mustang";
import { property, state } from "lit/decorators.js";

import { Skill, Log } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";


import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";

type hydratedLog = Log & { skill: Skill | undefined };

export class LogViewElement extends View<Model, Msg> {
    @property({ attribute: "user-id"})
    userid?: string;

    @state()
    get logs(): Array<Log> | undefined {
        return this.model.logs;
    }

    @state()
    get skills(): Array<Skill> | undefined {
        return this.model.skills;
    }

    @state()
    get hydratedLogs(): Array<hydratedLog> | undefined {
        const logsWithSkills = this.logs?.map(log => ({
            ...log,
            skill: 
                this.skills?.find(
                    skill => skill._id === this.model.skills
                ),
        }));

        return logsWithSkills?.filter(entry => entry.skill !== undefined);
    }



    constructor() {
        super("bigbrother:store");
    }
    
    render() {
        function renderHydratedLog(hl: hydratedLog){
            return html `
                <reflection-yuh
                    date="date"
                    title=${hl.skill?.title}
                    cat-color="skill--${hl.skill?.category}"
                    href="skill-expand.html"
                >
                    <span slot="description">
                        ${hl.reflection}
                    </span>
                </reflection-yuh>
            `;
        }

        return html`
            <div class="main">
                <div class="searchbar">Search...</div>
                <div class="container">
                    <h2>Log</h2>
                    ${this.hydratedLogs?.map(renderHydratedLog)}
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
            "log/index",
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