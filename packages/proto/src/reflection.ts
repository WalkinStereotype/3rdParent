import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";
import reflection from "./scripts/styles/reflection.css.ts";
import skillColor from "./scripts/styles/skill-color.css.ts";


export class ReflectionElement extends LitElement {
    @property() href?: string = '';
    @property({ attribute: 'cat-color' }) catColor: string = 'skill--custom';
    @property() title: string = 'Default Title';
    @property() date?: string;

    
    override render() {
        return html`
            <div class="log-entry ${this.catColor}">
                <div class="log-entry-top">
                    <div class="log-entry-info">
                        <div class="log-entry-date">${this.date}</div>
                        <a href=${this.href} class="log-entry-title">${this.title}</a>
                    </div>
                    <button class="edit-btn">Edit</button>
                </div>
                <div class="log-entry-description">
                    <slot name="description">what.</slot>
                </div>
            </div>
        `;
    }

    static styles = [
        reset.styles,
        reflection.styles,
        skillColor.styles
    ];
}
