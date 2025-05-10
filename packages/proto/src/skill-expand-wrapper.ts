import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

type Skill = {
    title: string;
    category: string;
    catColor: string;
    icon: string;
    description: string;
    resources: Array<Resource>;
}

interface Resource {
    type: string;
    label: string;
    url: string;
}

export class SkillExpandWrapperElement extends LitElement {
    @property() src?: string;

    @state() title: string = "";
    @state() category: string = "";
    @state() catColor: string = "";
    @state() icon: string = "";
    @state() description: string = "";
    @state() resources: Array<Resource> = [];

    render() {
        const { resources } = this;

        function renderResource(resource: Resource){
            return html `
                <a 
                    class=resource 
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
                title=${this.title} 
                category=${this.category}
                cat-color=${this.catColor}
            >
                <div slot="icon">${this.icon}</div>
                <div slot="description">${this.description}</div>
                <button slot="favorite" onclick="event.stopPropagation()">Star</button>
                <div slot="resources">
                    ${resources.map(renderResource)}
                </div>
            </skill-expand>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
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
                this.catColor = skill.catColor;
                this.icon = skill.icon;
                this.description = skill.description;
                this.resources = skill.resources;
            }
        })
    }
}