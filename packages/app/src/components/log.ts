import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";

type Reflection = {
    date: string;
    title: string;
    catColor: string;
    description: string;
}

export class LogElement extends LitElement {
    @property()
    src?: string;

    @state()
    reflections: Array<Reflection> = [];

    render() {
        function renderReflection(r: Reflection){
            return html `
                <reflection-yuh
                    date=${r.date}
                    title=${r.title}
                    cat-color=${r.catColor}
                    href="skill-expand.html"
                >
                    <span slot="description">
                        ${r.description}
                    </span>
                </reflection-yuh>
            `;
        }

        return html`
            <div class="container">
                <h2>Log</h2>
                ${this.reflections.map(renderReflection)}
            </div>
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
                    const reflections = json as Array<Reflection>;
                    this.reflections = reflections;
                }
            })
    }

    static styles = [
        reset.styles,
        css`        
        `
    ];
}