import{i as d,a as c,x as n,r as p,O as at,e as vt,b as h,d as R,f as q,n as l,h as gt,c as ft,_ as bt}from"./state-DruNTKZ4.js";const kt=d`
    .main {
        flex: 1;
        background-color: var(--color-background-page);
        padding: 1rem;
    }

    .container {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-areas: "left middle";
        height: 100vh; /* full screen height */
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

    @media (max-width: 900px) {
        .container {
            display: grid;
            grid-template-columns: 80px 1fr;
            grid-template-areas: "left middle";
            height: 100vh; 
        }
    }

`,b={styles:kt},K=class K extends c{render(){return n`
            <button @click=${this.handleBack}>
            <svg class="icon">
                <use href="/icons/sprite.svg#icon-back"></use>
            </svg>
            <span style="font-size: 1.7rem;">Back</span>
            </button>
        `}handleBack(){window.history.length>1?window.history.back():window.location.href="/app"}};K.styles=[p.styles,b.styles,d`
            button {
                background: transparent;
                border: none;
                color: var(--color-text); 
                font-family: var(--font-text);
                font-size: 1rem;
                display: inline-flex;
                align-items: center;
                gap: 0.1rem;
                cursor: pointer;
                padding: 0.5rem;
                transition: font-weight 0.2s ease;
            }

            button:hover {
                font-weight: bold;
            }

            .icon {
                width: 1em;
                height: 1em;
                fill: currentColor;
                display: inline-block;
            }
        `];let T=K;var yt=Object.defineProperty,nt=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&yt(e,r,t),t};const Q=class Q extends c{constructor(){var r;super(),this.loggedIn=!1,this._authObserver=new at(this,"bigbrother:auth");const e=(r=this.shadowRoot)==null?void 0:r.querySelector("mode-toggle");e==null||e.addEventListener("click",s=>{s.stopPropagation();const t=s.target,o=t.checked,a=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:o}});t.dispatchEvent(a),console.log("dark mode triggered")})}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{const{user:r}=e;r&&r.authenticated?(this.loggedIn=!0,this.userid=r.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return n`
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
                @change=${e=>{e.stopPropagation();const r=e.target,s=r.checked,t=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:s}});r.dispatchEvent(t),console.log("dark mode triggered")}}
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
    `}renderSignOutButton(){return n`
      <button
        class="signing-btn"
        @click=${e=>{vt.relay(e,"auth:message",["auth/signout"])}}
      >
        Sign Out
      </button>
    `}renderSignInButton(){return n`
      <a 
        class="signing-btn"
        href="/login.html"
      >
        Sign In…
      </a>
    `}static initializeOnce(){function e(r,s){r==null||r.classList.toggle("dark-mode",s)}document.body.addEventListener("darkmode:toggle",r=>e(r.currentTarget,r.detail.checked)),console.log("in custom event")}};Q.styles=[p.styles,b.styles,d`
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
    `];let $=Q;nt([h()],$.prototype,"loggedIn");nt([h()],$.prototype,"userid");const xt=d`
    .container {
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-template-areas: "middle right";
        height: 100vh; /* full screen height */
    }

    .main {
        flex: 1;
        background-color: var(--color-background-page);
        padding: 1rem;
        grid-area: middle;
    }

    .extra {
        width: 300px;
        background-color: var(--color-background-page);
        padding: 1rem;
        grid-area: right;
    }

    @media (max-width: 750px) {
        .container {
            grid-template-columns: 1fr; 
            grid-template-rows: auto auto; 
            grid-template-areas:
                "middle"
                "right";
        }
        
        .main {
            grid-area: middle;
        }
        
        .extra {
            grid-area: right;
        }
    }
`,mt={styles:xt},$t=d`
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
`,j={styles:$t};var wt=Object.defineProperty,H=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&wt(e,r,t),t};const I=class I extends c{render(){return n`
        <div class="container">
            <div class="main">
              <div class="searchbar">Search...</div>
              <todo-index src="/data/todo-list-index.json"></todo-index>
            </div>
        
            <div class="extra">
              <recents-yuh src="/data/recents.json"></recents-yuh>
            </div>
        </div>
    `}};I.uses=R({"mu-form":q.Element}),I.styles=[p.styles,b.styles,mt.styles,j.styles];let k=I;H([l({attribute:"user-id"})],k.prototype,"userid");H([h()],k.prototype,"todosHome");H([h()],k.prototype,"recents");var Ct=Object.defineProperty,lt=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Ct(e,r,t),t};const X=class X extends c{constructor(){super(...arguments),this.todos=[]}render(){function e(r){return n`
                <task-todo 
                    href=${r.href} 
                    title=${r.title}
                    svg-src=${r.svg}
                >
                    <button slot="action" onclick="event.stopPropagation()">Done?</button>
                </task-todo>
            `}return n`
            <h2>In Progress...</h2>
            <br>
            ${this.todos.map(e)}
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(r=>r.json()).then(r=>{if(r){const s=r;this.todos=s}})}};X.styles=[p.styles,d`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let w=X;lt([l()],w.prototype,"src");lt([h()],w.prototype,"todos");var Pt=Object.defineProperty,W=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Pt(e,r,t),t};const Z=class Z extends c{constructor(){super(...arguments),this.href="",this.title="Default Title"}render(){return n`
      <a href=${this.href} class="task-todo-link">
          <div class="task-todo">
            <div class="task-todo-icon">${this.svgSrc}</div>
            <div class="task-todo-title">${this.title}</div>
            <slot="action"><button class="task-todo-edit-btn" onclick="event.stopPropagation()">Done?</button></slot>
          </div>
      </a>
    `}};Z.styles=[p.styles,d`
      .task-todo-link {
          text-decoration: none; 
          color: inherit;         
          display: block;
          width: 100%;
      }
      
      .task-todo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--color-text);
          background-color: var(--color-task-todo-background);
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 16px;
          background-color 0.3s ease, color 0.3s ease;
      }
      
      .task-todo:hover {
          font-weight: bold;
          background-color: var(--color-task-todo-background-hover);
      }
      
      .task-todo-icon {
          font-size: 24px;
          font-weight: bold;
          margin-right: 12px;
      }

      .task-todo-title {
          flex-grow: 1;
          font-family: var(--font-display);
          font-size: 25px;
          /* font-weight: bold; */
          text-align: left;
      }
      
      .task-todo-edit-btn {
          color: var(--color-text);
          background-color: var(--color-background-button);
          border: 1px solid var(--color-border-searchbar);
          padding: 4px 12px;
          border-radius: 24px;
          cursor: pointer;
          font-size: 14px;
      }
    `];let y=Z;W([l()],y.prototype,"href");W([l()],y.prototype,"title");W([l({attribute:"svg-src"})],y.prototype,"svgSrc");var _t=Object.defineProperty,ct=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&_t(e,r,t),t};const L=class L extends c{constructor(){super(...arguments),this.recents=[]}render(){function e(r){return n`
                <a href=${r.href}>${r.title}</a>
            `}return n`
            <div class="container">
                <h3>Recent Accomplishments</h3>
                <br>
                ${this.recents.map(e)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(r=>r.json()).then(r=>{if(r){const s=r;this.recents=s}})}};L.styles=[p.styles,d`        
            .container {
                display: flex;
                flex-direction: column;
                text-align: center;
            }

            a {
                color: var(--color-link);
                font-style: italic;
            }
            a:hover {
                color: var(--color-link-hover);
            }
        `];let C=L;ct([l()],C.prototype,"src");ct([h()],C.prototype,"recents");var zt=Object.defineProperty,dt=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&zt(e,r,t),t};const A=class A extends c{constructor(){super(...arguments),this.mode="view"}get src(){return"/api/skills/"}render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <skill-list src=${this.src}></skill-list>
            </div>
        `}};A.uses=R({"mu-form":q.Element}),A.styles=[p.styles,b.styles,j.styles];let P=A;dt([l({attribute:"user-id"})],P.prototype,"userid");dt([l()],P.prototype,"mode");var jt=Object.defineProperty,pt=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&jt(e,r,t),t};const N=class N extends c{constructor(){super(...arguments),this.skills=[]}render(){const{skills:e}=this;function r(s){return n`
                <skill-yuh
                    href="/app/skills/${s._id}"
                    cat-color="skill--${s.category}"
                    icon=${s.category}
                    title=${s.title}
                >
                    <button slot="action" class="skill-btn" onclick="event.stopPropagation()">Star</button>
                </skill-yuh>
            `}return n`
            <h2>Skills</h2>
            <br>
            ${e.map(r)}
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(r=>console.log("hi",r)),fetch(e).then(r=>r.json()).then(r=>{if(r){const s=r;this.skills=s}})}};N.styles=[p.styles,d`        
            .skill-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let _=N;pt([l()],_.prototype,"src");pt([h()],_.prototype,"skills");const Ot=d`
    .skill--home {
        background-color: var(--color-background-home);
    }

    .skill--finance {
        background-color: var(--color-background-finance);
    }

    .skill--car {
        background-color: var(--color-background-car);
    }

    .skill--misc {
        background-color: var(--color-background-misc);
    }

    .skill--custom {
        background-color: var(--color-background-custom);
    }
`,Y={styles:Ot};function ht(i){return i?i.charAt(0).toUpperCase()+i.slice(1):""}var St=Object.defineProperty,M=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&St(e,r,t),t};const V=class V extends c{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title",this.icon=""}render(){return n`
        <a href=${this.href} class="skill-link">
            <div class="skill ${this.catColor}">
              <div class="skill-icon">${ht(this.icon)}</div>
              <div class="skill-title">${this.title}</div>
              <slot name="action"><button class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button></slot>
            </div>
        </a>
    `}};V.styles=[p.styles,Y.styles,d`
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
    `];let v=V;M([l()],v.prototype,"href");M([l({attribute:"cat-color"})],v.prototype,"catColor");M([l()],v.prototype,"title");M([l()],v.prototype,"icon");var Dt=Object.defineProperty,G=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Dt(e,r,t),t};const B=class B extends c{constructor(){super(...arguments),this.mode="view"}get src(){return`/api/skills/${this.skillid}`}render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <back-button></back-button>
                <skill-expand-wrapper src=${this.src}></skill-expand>
            </div>
        `}};B.uses=R({"mu-form":q.Element}),B.styles=[p.styles,b.styles,j.styles];let x=B;G([l({attribute:"user-id"})],x.prototype,"userid");G([l({attribute:"skill-id"})],x.prototype,"skillid");G([l()],x.prototype,"mode");var It=Object.defineProperty,O=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&It(e,r,t),t};const E=class E extends c{constructor(){super(...arguments),this.title="",this.category="",this.description="",this.resources=[],this._authObserver=new at(this,"bigbrother:auth")}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}render(){const{resources:e}=this;function r(s){return n`
                <a 
                    class="resource" 
                    href=${s.url}
                    target="_blank"
                >
                    ${s.type}: ${s.label}
                </a>
                <br>
            `}return n`
            <skill-expand 
                title=${this.title} 
                category=${ht(this.category)}
                cat-color=skill--${this.category}
                icon=${this.category.substring(0,1).toUpperCase()}
            >
                <div slot="description">${this.description}</div>
                <button slot="favorite" class="skill-expand-favorite-btn" onclick="event.stopPropagation()">Star</button>
                <div slot="resources">
                    ${e.map(r)}
                </div>
            </skill-expand>
        `}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user}),this.src&&this.hydrate(this.src)}attributeChangedCallback(e,r,s){super.attributeChangedCallback(e,r,s),e==="src"&&r!==s&&s&&this.hydrate(s)}hydrate(e){fetch(e).then(r=>r.json()).then(r=>{if(r){const s=r;this.title=s.title,this.category=s.category,this.description=s.description,this.resources=s.resources}})}};E.styles=d`  
            .skill-expand-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
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
        `;let u=E;O([l()],u.prototype,"src");O([h()],u.prototype,"title");O([h()],u.prototype,"category");O([h()],u.prototype,"description");O([h()],u.prototype,"resources");var At=Object.defineProperty,U=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&At(e,r,t),t};const tt=class tt extends c{constructor(){super(...arguments),this.catColor="skill--custom",this.title="Filler Title",this.category="custom",this.icon="C"}render(){return n`
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
            <div class="skill-expand-description"><slot name="description">
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
    `}};tt.styles=[p.styles,Y.styles,d`
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
            color: var(--color-text-no-dark);
            background-color: var(--color-background-button-no-dark);
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


    `];let g=tt;U([l({attribute:"cat-color"})],g.prototype,"catColor");U([l()],g.prototype,"title");U([l()],g.prototype,"category");U([l()],g.prototype,"icon");var Bt=Object.defineProperty,Rt=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Bt(e,r,t),t};const rt=class rt extends c{render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <todo-list src="/data/todo-list.json"></todo-list>
            </div>
        `}};rt.styles=[p.styles,b.styles,j.styles];let S=rt;Rt([l({attribute:"user-id"})],S.prototype,"userid");var Mt=Object.defineProperty,J=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Mt(e,r,t),t};const et=class et extends c{constructor(){super(...arguments),this.highPriorities=[],this.lowPriorities=[]}render(){function e(s){return n`
                <skill-yuh
                href=${s.href}
                cat-color=${s.catColor}
                icon=${s.icon}
                title=${s.title}
                >
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Unprioritize</button>
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
                </skill-yuh>
            `}function r(s){return n`
                <skill-yuh
                href=${s.href}
                cat-color=${s.catColor}
                icon=${s.icon}
                title=${s.title}
                >
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Prioritize</button>
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
                </skill-yuh>
            `}return n`
            <div class="todo-actual">
                <h2>To-Do</h2>
                <br>
                ${this.highPriorities.map(e)}
            </div>
            <br>
            <br>
            <div class="todo-interested">
                <h2>Interested</h2>
                <br>
                ${this.lowPriorities.map(r)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(r=>r.json()).then(r=>{if(r){const s=r;this.highPriorities=s.filter(t=>t.priority),this.lowPriorities=s.filter(t=>!t.priority)}})}};et.styles=[p.styles,d`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let m=et;J([l()],m.prototype,"src");J([h()],m.prototype,"highPriorities");J([h()],m.prototype,"lowPriorities");var Ut=Object.defineProperty,Ft=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Ut(e,r,t),t};const ot=class ot extends c{render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <log-yuh src="/data/log.json"></log-yuh>
            </div>
        `}};ot.styles=[p.styles,b.styles,j.styles];let D=ot;Ft([l({attribute:"user-id"})],D.prototype,"userid");var Tt=Object.defineProperty,ut=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Tt(e,r,t),t};const st=class st extends c{constructor(){super(...arguments),this.reflections=[]}render(){function e(r){return n`
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
            `}return n`
            <div class="container">
                <h2>Log</h2>
                ${this.reflections.map(e)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(r=>r.json()).then(r=>{if(r){const s=r;this.reflections=s}})}};st.styles=[p.styles,d`        
        `];let z=st;ut([l()],z.prototype,"src");ut([h()],z.prototype,"reflections");const qt=d`
    .log-entry {
        color: var(--color-text-no-dark);
        font-family: var(--font-text);
        /* border: 1px solid #ccc; */
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
        background-color: var(--color-task-todo-background);
        /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05); */
        max-width: 600px;
    }
    
    .log-entry-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    
    .log-entry-description {
        display: flex;
        flex-direction: column;
        background-color: var(--color-background-searchbar);
        border-radius: 8px;
        padding: 1rem;
        font-family: var(--font-text);
    }
    
    .log-entry-date {
        font-size: 0.875rem;
        font-family: var(--font-display);
    }
    
    .log-entry-title {
        flex-grow: 1;
        font-family: var(--font-display);
        font-size: 25px;
        font-weight: bold;
        text-align: left;
        letter-spacing: 0.05em;
    }
    
    .edit-btn {
        background-color: #C8BEA4;
        border: 1px solid var(--color-border-searchbar);
        padding: 4px 12px;
        border-radius: 24px;
        cursor: pointer;
        font-size: 14px;
    }
    
    /* .edit-btn:hover {
        background-color: #f0f0f0;
    } */
    
    .log-entry-bottom {
        font-size: 1rem;
        color: #333;
    }

    a {
        color: var(--color-text-no-dark);
    }
`,Ht={styles:qt};var Wt=Object.defineProperty,F=(i,e,r,s)=>{for(var t=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(t=a(e,r,t)||t);return t&&Wt(e,r,t),t};const it=class it extends c{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title"}render(){return n`
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
        `}};it.styles=[p.styles,Ht.styles,Y.styles];let f=it;F([l()],f.prototype,"href");F([l({attribute:"cat-color"})],f.prototype,"catColor");F([l()],f.prototype,"title");F([l()],f.prototype,"date");const Yt=[{path:"/app",view:()=>n`
      <home-view></home-view>
    `},{path:"/app/skills",view:()=>n`
      <skill-list-view></skill-list-view>
    `},{path:"/app/skills/:skillid",view:i=>n`
      <skill-expand-view skill-id=${i.skillid}>Skill expanded</skill-expand-view>
    `},{path:"/app/todo",view:()=>n`
      <todo-view>Todo list</todo-view>
    `},{path:"/app/log",view:()=>n`
      <log-view>Hey</log-view>
    `},{path:"/",redirect:"/app"}];R({"mu-auth":ft.Provider,"mu-history":gt.Provider,"mu-switch":class extends bt.Element{constructor(){super(Yt,"bigbrother:history","bigbrother:auth")}},"back-button":T,"navbar-yuh":$,"home-view":k,"todo-index":w,"task-todo":y,"recents-yuh":C,"skill-list-view":P,"skill-list":_,"skill-yuh":v,"skill-expand-view":x,"skill-expand-wrapper":u,"skill-expand":g,"todo-view":S,"todo-list":m,"log-view":D,"log-yuh":z,"reflection-yuh":f});document.getElementById("mode-toggle");document.body.addEventListener("darkmode:toggle",i=>{i.detail.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),console.log("in custom event")});
