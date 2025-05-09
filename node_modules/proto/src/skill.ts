import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";
import skillColor from "./scripts/styles/skill-color.css.ts";

export class SkillElement extends LitElement {
  @property() href?: string = '';
  @property({ attribute: 'cat-color' }) catColor: string = 'skill--custom';
  @property() title: string = 'Default Title';
  @property() icon?: string;

  override render() {
    return html`
        <a href=${this.href} class="skill-link">
            <div class="skill ${this.catColor}">
              <div class="skill-icon">${this.icon}</div>
              <div class="skill-title">${this.title}</div>
              <slot="action"><button class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button></slot>
            </div>
        </a>
    `;
  }

  static styles = [
    reset.styles,
    skillColor.styles,
    css`
        .skill-link {
            text-decoration: none; 
            max-width: var(--max-width-main);
            max-height: var(--max-height-main);
            color: inherit;         
            display: block;
            width: 100%;
        }
        
        .skill {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-height: var(--max-height-main);
            color: var(--color-text-logo);
            /* background-color: var(--color-task-todo-background); */
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            transition: background-color 0.2s;
        }
        
        .skill:hover {
            font-weight: bold;
            /* background-color: #ccc2a9; */
        }
        
        .skill-icon {
            font-size: 24px;
            font-weight: bold;
            margin-right: 12px;
        }

        .skill-title {
            flex-grow: 1;
            font-family: var(--font-display);
            font-size: 25px;
            /* font-weight: bold; */
            text-align: left;
        }
        
        .skill-favorite-btn {
            background-color: #C8BEA4;
            border: 1px solid var(--color-border-searchbar);
            padding: 4px 12px;
            border-radius: 24px;
            cursor: pointer;
            font-size: 14px;
        }

        .text-center {
            text-align: center;
        }
    `];
}