import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import skillColor from "../styles/skill-color.css.ts";

import { capitalizeFirstLetter } from "../scripts/capitalize-word.ts";

export class SkillElement extends LitElement {
  @property() href?: string = '';
  @property({ attribute: 'cat-color' }) catColor: string = 'skill--custom';
  @property() title: string = 'Default Title';
  @property() icon: string = '';

  override render() {
    return html`
        <div class="skill ${this.catColor}">
            <a href=${this.href} class="skill-link">
                <div class="skill-icon">${ capitalizeFirstLetter(this.icon) }</div>
                <div class="skill-title">${this.title}</div>
            </a>

            <slot name="action"><button class="skill-favorite-btn" onclick="console.log("click")">Star</button></slot>
        </div>
        
    `;
  }

  static styles = [
    reset.styles,
    skillColor.styles,
    css`
        .skill-link {
            display: flex;
            align-items: center;
            text-decoration: none; 
            max-width: var(--max-width-main) - 75px;
            max-height: var(--max-height-main);
            color: inherit;   
            width: 100%;
            transition: font-weight 0.2s,  background-color 0.2s;
        }
        
        .skill {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: var(--max-width-main);
            max-height: var(--max-height-main);
            color: var(--color-text-logo);
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 16px;
        }
        
        .skill-link:hover {
            font-weight: bold;
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
            color: var(--color-text-no-dark);
            background-color: var(--color-background-button-no-dark);
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