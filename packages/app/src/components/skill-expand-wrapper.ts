import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";

import { Skill } from "../models/skill.ts";

import { capitalizeFirstLetter } from "../scripts/capitalize-word.ts";

interface Resource {
    type: {type: string};
    label: string;
    url: string;
}

export class SkillExpandWrapperElement extends LitElement {
    @property() src?: string;

    @state() title: string = "";
    @state() category: string = "";
    @state() description: string = "";
    @state() resources: Array<Resource> = [];

    @property({ attribute: 'user-id'}) userid: string= "";
    @property({ attribute: 'skill-id'}) skillid: string= "";

    _authObserver = new Observer<Auth.Model>(this, "bigbrother:auth");
    _user?: Auth.User;
    
    get authorization() {
        return (
            this._user?.authenticated && {
                Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).token}`
            }
        );
    }

    render() {
        const { resources } = this;

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
            <skill-expand 
                user-id=${this.userid}
                skill-id=${this.skillid}
                title=${this.title} 
                category=${capitalizeFirstLetter(this.category)}
                cat-color=skill--${this.category}
                icon=${this.category.substring(0,1).toUpperCase()}
            >
                <div slot="description">${this.description}</div>
                <button slot="favorite" class="skill-expand-favorite-btn" onclick="event.stopPropagation()">Star</button>
                <div slot="resources">
                    ${resources.map(renderResource)}
                </div>
            </skill-expand>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this._authObserver.observe((auth: Auth.Model) => {
            this._user = auth.user;
        });

        if (this.src) this.hydrate(this.src);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        super.attributeChangedCallback(name, oldValue, newValue);
      
        if (name === "src" && oldValue !== newValue && newValue)
          this.hydrate(newValue);
    }

    hydrate(src: string) {
        fetch(src)
        .then(res => res.json())
        .then((json: object) => {
            if (json) {
                const skill = json as Skill;

                this.title = skill.title;
                this.category = skill.category;
                this.description = skill.description;
                this.resources = skill.resources as Resource[];
            }
        })
    }

    static styles = 
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
        `;
}