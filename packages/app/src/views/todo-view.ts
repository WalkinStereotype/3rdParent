import { View } from "@calpoly/mustang";
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import searchbar from "../styles/searchbar.css.ts";

import { Interest } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class TodoViewElement extends View<Model, Msg> {
    @property({ attribute: "user-id"})
    userid?: string;

    @state()
    get interests(): Array<Interest> | undefined {
        return this.model.interests;
    }

    @state()
    highPriorities: Array<Interest> = [];

    @state()
    lowPriorities: Array<Interest> = [];

    constructor() {
        super("bigbrother:store");
    }

    render() {
        // function renderHighPriority(p: Interest){
        //     return html `
        //         <skill-yuh
        //             href=${p.href}
        //             cat-color=${p.catColor}
        //             icon=${p.icon}
        //             title=${p.title}
        //         >
        //         <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Unprioritize</button>
        //         <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
        //         </skill-yuh>
        //     `;
        // }

        // function renderLowPriority(p: Interest){
        //     return html `
        //         <skill-yuh
        //             href=${p.href}
        //             cat-color=${p.catColor}
        //             icon=${p.icon}
        //             title=${p.title}
        //         >
        //         <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Prioritize</button>
        //         <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
        //         </skill-yuh>
        //     `;
        // }

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