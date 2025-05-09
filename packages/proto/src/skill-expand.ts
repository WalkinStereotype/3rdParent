import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";
import skillColor from "./scripts/styles/skill-color.css.ts";

export class SkillExpandElement extends LitElement {
  @property({ attribute: 'cat-color'}) catColor: string = 'skill--custom';
  @property() title: string = 'Filler Title';
  @property() category: string = 'custom';
  @property() icon: string = 'C';


  override render() {
    return html`
        <div class="skill-expand ${this.catColor}">
            <div class="skill-expand-header">
                <div class="skill-expand-title">${this.title}</div>
                <slot name="favorite"><button class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button></slot>
            </div>
            <div class="skill-expand-category">
                <span class="category-text">Category: ${this.category}</span>
                <div class="skill-expand-icon">${this.icon}</div>
            </div>
            <div style="height: 1px; background: black; margin: 8px 0;"></div>
            <div class="skill-expand-description"><slot="description">
                This skill can be used when one of your buttons fall off of an article of clothing
            </slot></div>
        </div>        

        <nav class="resource_list">
            <h2>Resources</h2>
            <slot name="resources"></slot>
        </nav>

        <br>
        <br>
        <a href="empty-reflection.html" class="resource">Write reflection</a>
        <br>
    `;
  }

  static styles = [
    reset.styles,
    skillColor.styles,
    css`
        .skill-expand {
            display: flex;
            flex-direction: column;
            color: var(--color-text-logo);
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            transition: background-color 0.2s;
        }
        
        .skill-expand-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .skill-expand-category {
            display: flex;
            font-family: var(--font-text);
            font-size: 24px;
            margin-right: 12px;
        }
        
        .category-text {
            margin-right: 0.5rem; 
        }

        .skill-expand-icon {
            font-size: 24px;
            font-weight: bold;
            margin-right: 12px;
        }

        .skill-expand-title {
            flex-grow: 1;
            font-family: var(--font-display);
            font-size: 35px;
            font-weight: bold;
            text-align: left;
            letter-spacing: 0.05em;
        }

        .skill-expand-description {
            flex-grow: 1;
            font-family: var(--font-text);
            font-size: 18px;
            /* font-weight: bold; */
            text-align: left;
        }
        
        .skill-expand-favorite-btn {
            background-color: #C8BEA4;
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
    `];
}