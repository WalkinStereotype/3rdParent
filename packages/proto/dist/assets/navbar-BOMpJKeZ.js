import{a as c,i as h,O as v,x as l,e as u,r as b,b as g}from"./reset.css-7s6RLoVs.js";document.getElementById("mode-toggle");document.body.addEventListener("darkmode:toggle",n=>{n.detail.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),console.log("in custom event")});const m=c`
    header {
        color: var(--color-text-header);
        background-color: var(--color-background-header);
        font-family: var(--font-display);
        font-weight: 400;
        font-style: normal; 
        margin: 0;                
        padding: 0;
    }

    html {
        margin: 0;
        padding: 0;
    }

    body {
        color: var(--color-text); 
        background-color: var(--color-background-page);       
        font-family: var(--font-text);
        font-optical-sizing: auto;
        font-weight: 500; /* 400 - 700 */
        font-style: normal;
        margin: 0;                
        padding: 0;

    }

    body, body * {
    transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    h1 {
        color: inherit;
        font-size: 1.8 rem;  
    }

    h2, h3, h4, h5, h6 {
        color: inherit; 
    }

    a {
        color: var(--color-text-header);
        text-decoration: underline; 
        font-weight: normal;   
    }
    
    a:hover {
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

    .searchbar {
        display: flex;
        max-width: var(--max-width-main);
        align-items: center;
        justify-content: space-between;
        font-family: var(--font-text);
        color: var(--color-text-searchbar);
        background-color: var(--color-background-searchbar);
        border: 2px solid var(--color-border-searchbar);
        padding: 6px 16px;
        border-radius: 64px;
        margin-bottom: 16px;
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
`,f={styles:m};var x=Object.defineProperty,p=(n,e,o,r)=>{for(var t=void 0,a=n.length-1,i;a>=0;a--)(i=n[a])&&(t=i(e,o,t)||t);return t&&x(e,o,t),t};const d=class d extends h{constructor(){var o;super(),this.loggedIn=!1,this._authObserver=new v(this,"bigbrother:auth");const e=(o=this.shadowRoot)==null?void 0:o.querySelector("mode-toggle");e==null||e.addEventListener("click",r=>{r.stopPropagation();const t=r.target,a=t.checked,i=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:a}});t.dispatchEvent(i),console.log("dark mode triggered")})}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{const{user:o}=e;o&&o.authenticated?(this.loggedIn=!0,this.userid=o.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return l`
      <div class="sidebar">
        
        <div class="title-wrapper">
          <div class="app-logo">:3 :P</div>
          <span class="nav-title"><h1>3rd Parent</h1></span>
        </div>
        
          
        <div class="menu-wrapper">
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
                @change=${e=>{e.stopPropagation();const o=e.target,r=o.checked,t=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:r}});o.dispatchEvent(t),console.log("dark mode triggered")}}
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
                    ${this.userid||"Who u"}
                  </span>
              </button>

              <div 
                  popover 
                  id="profile-popover"
                  class="sign-in-out-popover"
              >
                  <div>${this.userid||"Who u"}</div>
                  <div class="stats">Skills learned: 0</div>
                  ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
              </div>
          </div>
        </div>
      </div>
    `}renderSignOutButton(){return l`
      <button
        class="signing-btn"
        @click=${e=>{u.relay(e,"auth:message",["auth/signout"])}}
      >
        Sign Out
      </button>
    `}renderSignInButton(){return l`
      <a 
        class="signing-btn"
        href="/login.html"
      >
        Sign In…
      </a>
    `}static initializeOnce(){function e(o,r){o==null||o.classList.toggle("dark-mode",r)}document.body.addEventListener("darkmode:toggle",o=>e(o.currentTarget,o.detail.checked)),console.log("in custom event")}};d.styles=[b.styles,f.styles,c`
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
    `];let s=d;p([g()],s.prototype,"loggedIn");p([g()],s.prototype,"userid");export{s as N,f as p};
