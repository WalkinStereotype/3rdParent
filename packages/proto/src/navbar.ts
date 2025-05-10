import { html, css, LitElement } from "lit";
// import { shadow } from "@calpoly/mustang";
import reset from "./scripts/styles/reset.css.ts";
import page from "./scripts/styles/page.css.ts";

export class NavBarElement extends LitElement {
  override render() {
    return html`
      <div class="sidebar">
        
        <div class="title-wrapper">
          <div class="app-logo">:3 :P</div>
          <span class="nav-title"><h1>3rd Parent</h1></span>
        </div>
        
        
        <span class="nav-user"><h2>50so.dre</h2></span>
        <nav class="menu">
          <a href="index.html">
            <svg class="nav-icon">
              <use href="/icons/sprite.svg#icon-home" />
            </svg>
            <span class="nav-label">Home</span>
          </a>
          <br>
          <a href="skill-list.html">
            <svg class="nav-icon">
              <use href="/icons/sprite.svg#icon-skills" />
            </svg>
            <span class="nav-label">Skills</span>
          </a>
          <br>
          <a href="todo-list.html">
            <svg class="nav-icon">
              <use href="/icons/sprite.svg#icon-todo" />
            </svg>
            <span class="nav-label">To-Do</span>
          </a>
          <br>
          <a href="log.html">
            <svg class="nav-icon">
              <use href="/icons/sprite.svg#icon-logs" />
            </svg>
            <span class="nav-label">Logs</span>
          </a>
          <br>
          <label>
            <input type="checkbox" autocomplete="off" id="mode-toggle"
              @change=${(event: Event) => {
                event.stopPropagation();
                const eventTarget =  event.target as HTMLInputElement;
            
                const isChecked = eventTarget.checked;
            
                const customEvent = new CustomEvent('darkmode:toggle', {
                    bubbles: true,
                    composed: true,
                    detail: { checked: isChecked }
                });
            
                eventTarget.dispatchEvent(customEvent);
                console.log("dark mode triggered")}}
            />
            <span class="nav-label">Dark mode</span>
          </label>
        </nav>
      </div>
    `;
  }

  constructor() {
    super();

    const dm = this.shadowRoot?.querySelector("mode-toggle");
    
    dm?.addEventListener("click", (event) => {
      event.stopPropagation();

      const eventTarget = event.target as HTMLInputElement;

      const isChecked = eventTarget.checked;

      const customEvent = new CustomEvent('darkmode:toggle', {
          bubbles: true,
          composed: true,
          detail: { checked: isChecked }
      });

      eventTarget.dispatchEvent(customEvent);
      console.log("dark mode triggered")
    })
  }

  static styles = [
    reset.styles,
    page.styles,
    css`
        :root {
            transition: background-color 0.3s ease, color 0.3s ease;
        }    

        .menu {
            font-size: 1.5em;
            font-weight: bold;
        }

        svg.nav-icon {
            display: inline;
            height: 2em;
            width: 2em;
            vertical-align: top;
            fill: currentColor;
        }

        svg.icon {
            display: inline;
            height: 2em;
            width: 2em;
            vertical-align: top;
            fill: currentColor;
        }

        .title-wrapper {
            display: flex;
            align-items: center;
            gap: 10px; 
            margin-bottom: 20px;
        }

        .app-logo {
            background-color: var(--color-background-logo);
            color: var(--color-text-logo);
            padding: 5px 10px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: bold;
            white-space: nowrap;
            width: 40px;
            height: 40px;   

            border: 2px solid var(--color-border-logo);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .sidebar {
            width: 250px;
            color: var(--color-text-header);
            background-color: var(--color-background-header);
            font-family: var(--font-display);
            font-weight: 400;
            font-style: normal; 
            padding: 1rem;
            height: 100vh;
            position: sticky;
            transition: --color-background-header 3s ease, --color-text-header 3s ease;
        }

        @media (max-width: 900px) {
            .nav-title {
                display: none;
            }
            .nav-user {
                display: none;
            }
            .nav-label {
                display: none;
            }
            .sidebar {
                width: 80px;
            }
        }
    `];

  static initializeOnce() {
    function toggleDarkMode(page: HTMLElement | null, checked: any) {
      page?.classList.toggle("dark-mode", checked);
    }

    document.body.addEventListener("darkmode:toggle", (event: Event) =>
      toggleDarkMode(event.currentTarget as HTMLElement,
        (event as CustomEvent).detail.checked)
    );

    console.log("in custom event")
  }
}