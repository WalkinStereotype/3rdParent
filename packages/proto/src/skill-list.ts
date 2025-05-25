import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";

type Skill = {
    title: string;
    catColor: string;
    icon: string;
    href: string;
}

type Data = {
    skills: Array<Skill>,
}

export class SkillListElement extends LitElement {
    @property()
    src?: string;

    @state()
    skills: Array<Skill> = [];

    render() {
        const { skills } = this;
        function renderSkill(s: Skill){
            return html `
                <skill-yuh
                    href=${s.href}
                    cat-color=${s.catColor}
                    icon=${s.icon}
                    title=${s.title}
                >
                    <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button>
                </skill-yuh>
            `
        }

        return html`
            <h2>Skills</h2>
            <br>
            ${skills.map(renderSkill)}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.hydrate(this.src);
    }

    hydrate(src: string) {
        fetch(src)
        .then(res => res.json())
        .then((json: object) => {
            if(json) {
                const skillList = json as Array<Skill>;

                this.skills = skillList;
            }
        })
    }

    static styles = [
        reset.styles,
        css`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];
};
