import { html, css, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { Observer, Auth, Events } from "@calpoly/mustang";
import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";

export class NavBarElement extends LitElement {
  @state()
  loggedIn = false;

  @state()
  userid?: string;

  _authObserver = new Observer<Auth.Model>(this, "bigbrother:auth");
  _user?: Auth.User;

  get authorization() {
    return (
      this._user?.authenticated && {
        Authorization:
          `Bearer ${(this._user as Auth.AuthenticatedUser).token}`
      }
    );
  }

  connectedCallback() {
    super.connectedCallback();

    //Auth
    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user && user.authenticated ) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });

  }

  override render() {
    return html`
      <div class="sidebar">
        
        <div class="title-wrapper">
          <div class="app-logo">:3 :P</div>
          <span class="nav-title"><h1>3rd Parent</h1></span>
        </div>
        
          
        <div class="menu-wrapper">
          <nav class="menu">
            <a href="/app">
              <svg class="nav-icon">
                <use href="/icons/sprite.svg#icon-home" />
              </svg>
              <span class="nav-label">Home</span>
            </a>
            <br>
            <a href="/app/skills">
              <svg class="nav-icon">
                <use href="/icons/sprite.svg#icon-skills" />
              </svg>
              <span class="nav-label">Skills</span>
            </a>
            <br>
            <a href="/app/todo">
              <svg class="nav-icon">
                <use href="/icons/sprite.svg#icon-todo" />
              </svg>
              <span class="nav-label">To-Do</span>
            </a>
            <br>
            <a href="/app/log">
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

          <div class="menu popover-wrapper">
              <button 
                  class="profile-btn"
                  slot="actuator"
                  popovertarget="profile-popover"
              >
                  <svg class="nav-icon">
                    <use href="/icons/sprite.svg#icon-profile" />
                  </svg>
                  <span class="nav-label">
                    ${this.userid || "Who u"}
                  </span>
              </button>

              <div 
                  popover 
                  id="profile-popover"
                  class="sign-in-out-popover"
              >
                  <div>${this.userid || "Who u"}</div>
                  <div class="stats">Skills learned: 0</div>
                  ${this.loggedIn
                      ? this.renderSignOutButton()
                      : this.renderSignInButton()
                  }
              </div>
          </div>
        </div>
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

  renderSignOutButton() {
    return html`
      <button
        class="signing-btn"
        @click=${(e: UIEvent) => {
          Events.relay(e, "auth:message", ["auth/signout"])
        }}
      >
        Sign Out
      </button>
    `;
  }

  renderSignInButton() {
    return html`
      <a 
        class="signing-btn"
        href="/login.html"
      >
        Sign In…
      </a>
    `;
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
        }

        .menu-wrapper {
          display: flex;
          flex-direction: column;
          height: calc(100% - 60px);
        }

        .popover-wrapper {
          position: relative;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 2px solid var(--color-text);
        }
        
        .profile-btn {
          position: relative;
          display: inline-block;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          color: inherit;
          font-family: inherit;
          font: inherit;
          padding: 0.25rem 0;
          cursor: pointer;
        }

        .profile-btn:hover {
          font-weight: bold;
        }

        .sign-in-out-popover {
            // position: absolute;
            // bottom: 0%;
            // left: 100%;
            // transform: translateY(100%);
            background-color: var(--color-task-todo-background);
            color: var(--color-text);
            border: 2px solid var(--color-border-searchbar);
            border-radius: 6px;
            padding: 0.5rem;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            min-width: 120px;
        }

        .signing-btn {
          background-color: var(--color-background-button);
          border: 1px solid var(--color-border-searchbar);
          border-radius: 6px;
          padding: 4px 4px;
          font-size: 0.75em;
        }

        .signing-btn:hover {
          font-weight: bold;
        }
        

        a {
          text-decoration: none;
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
            position: relative;
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