import{a as ct,i as c,b as h,x as n,r as d,O as dt,e as ft,c as p,d as R,f as H,n as l,V as pt,h as kt,s as yt,_ as xt}from"./state-Ddp80qzq.js";const mt={};function $t(i,e,t){switch(i[0]){case"skill/index":o(i[1],t).then(r=>e(s=>({...s,skills:r})));break;default:throw new Error("Unhandled Auth message")}function o(r,s){const{userid:a}=r;return fetch(`/api/skills/list/${a}`,{headers:ct.headers(s)}).then(k=>{if(k.status===200)return k.json()}).then(k=>{if(k)return console.log("Skills:",k),k})}}const wt=c`
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

`,f={styles:wt},Z=class Z extends h{render(){return n`
            <button @click=${this.handleBack}>
            <svg class="icon">
                <use href="/icons/sprite.svg#icon-back"></use>
            </svg>
            <span style="font-size: 1.7rem;">Back</span>
            </button>
        `}handleBack(){window.history.length>1?window.history.back():window.location.href="/app"}};Z.styles=[d.styles,f.styles,c`
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
        `];let q=Z;var Ct=Object.defineProperty,W=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Ct(e,t,r),r};const L=class L extends h{constructor(){var t;super(),this.loggedIn=!1,this._authObserver=new dt(this,"bigbrother:auth");const e=(t=this.shadowRoot)==null?void 0:t.querySelector("mode-toggle");e==null||e.addEventListener("click",o=>{o.stopPropagation();const r=o.target,s=r.checked,a=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:s}});r.dispatchEvent(a),console.log("dark mode triggered")})}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{const{user:t}=e;t&&t.authenticated?(this.loggedIn=!0,this.username=t.username):(this.loggedIn=!1,this.username=void 0)})}render(){return n`
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
                @change=${e=>{e.stopPropagation();const t=e.target,o=t.checked,r=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:o}});t.dispatchEvent(r),console.log("dark mode triggered")}}
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
                    ${this.username||"Who u"}
                  </span>
              </button>

              <div 
                  popover 
                  id="profile-popover"
                  class="sign-in-out-popover"
              >
                  <div>${this.username||"Who u"}</div>
                  <div class="stats">Skills learned: 0</div>
                  ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
              </div>
          </div>
        </div>
      </div>
    `}renderSignOutButton(){return n`
      <a
        class="signing-btn"
        @click=${e=>{ft.relay(e,"auth:message",["auth/signout"])}}
      >
        Sign Out
      </a>
    `}renderSignInButton(){return n`
      <a 
        class="signing-btn"
        @click=${()=>location.assign("/login.html")}
      >
        Sign In…
      </a>
    `}static initializeOnce(){function e(t,o){t==null||t.classList.toggle("dark-mode",o)}document.body.addEventListener("darkmode:toggle",t=>e(t.currentTarget,t.detail.checked)),console.log("in custom event")}};L.styles=[d.styles,f.styles,c`
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
    `];let y=L;W([p()],y.prototype,"loggedIn");W([p()],y.prototype,"userid");W([p()],y.prototype,"username");const Pt=c`
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
`,_t={styles:Pt},zt=c`
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
`,j={styles:zt};var Ot=Object.defineProperty,Y=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Ot(e,t,r),r};const A=class A extends h{render(){return n`
        <div class="container">
            <div class="main">
              <div class="searchbar">Search...</div>
              <todo-index src="/data/todo-list-index.json"></todo-index>
            </div>
        
            <div class="extra">
              <recents-yuh src="/data/recents.json"></recents-yuh>
            </div>
        </div>
    `}};A.uses=R({"mu-form":H.Element}),A.styles=[d.styles,f.styles,_t.styles,j.styles];let x=A;Y([l({attribute:"user-id"})],x.prototype,"userid");Y([p()],x.prototype,"todosHome");Y([p()],x.prototype,"recents");var jt=Object.defineProperty,ht=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&jt(e,t,r),r};const N=class N extends h{constructor(){super(...arguments),this.todos=[]}render(){function e(t){return n`
                <task-todo 
                    href=${t.href} 
                    title=${t.title}
                    svg-src=${t.svg}
                >
                    <button slot="action" onclick="event.stopPropagation()">Done?</button>
                </task-todo>
            `}return n`
            <h2>In Progress...</h2>
            <br>
            ${this.todos.map(e)}
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.todos=o}})}};N.styles=[d.styles,c`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let P=N;ht([l()],P.prototype,"src");ht([p()],P.prototype,"todos");var St=Object.defineProperty,G=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&St(e,t,r),r};const V=class V extends h{constructor(){super(...arguments),this.href="",this.title="Default Title"}render(){return n`
      <a href=${this.href} class="task-todo-link">
          <div class="task-todo">
            <div class="task-todo-icon">${this.svgSrc}</div>
            <div class="task-todo-title">${this.title}</div>
            <slot="action"><button class="task-todo-edit-btn" onclick="event.stopPropagation()">Done?</button></slot>
          </div>
      </a>
    `}};V.styles=[d.styles,c`
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
    `];let m=V;G([l()],m.prototype,"href");G([l()],m.prototype,"title");G([l({attribute:"svg-src"})],m.prototype,"svgSrc");var Dt=Object.defineProperty,ut=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Dt(e,t,r),r};const E=class E extends h{constructor(){super(...arguments),this.recents=[]}render(){function e(t){return n`
                <a href=${t.href}>${t.title}</a>
            `}return n`
            <div class="container">
                <h3>Recent Accomplishments</h3>
                <br>
                ${this.recents.map(e)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.recents=o}})}};E.styles=[d.styles,c`        
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
        `];let _=E;ut([l()],_.prototype,"src");ut([p()],_.prototype,"recents");var It=Object.defineProperty,J=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&It(e,t,r),r};const B=class B extends pt{constructor(){super("bigbrother:model"),this.mode="view",this.skills=[]}get src(){return"/api/skills/list"}render(){var t;function e(o){return n`
                <skill-yuh
                    href="/app/skills/${o._id}"
                    cat-color="skill--${o.category}"
                    icon=${o.category}
                    title=${o.title}
                >
                    <button slot="action" class="skill-btn" onclick="event.stopPropagation()">Star</button>
                </skill-yuh>
            `}return console.log("Rendering skills:",this.skills),n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <div>
                    <h2>Skills</h2>
                    <br>
                    ${(t=this.skills)==null?void 0:t.map(e)}
                </div>
            </div>
        `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="user-id"&&t!==o&&o&&this.dispatchMessage(["skill/index",{userid:o}])}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>console.log("hi",t)),fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.skills=o}})}};B.uses=R({"mu-form":H.Element}),B.styles=[d.styles,f.styles,j.styles,c`        
            .skill-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let $=B;J([l({attribute:"user-id"})],$.prototype,"userid");J([l()],$.prototype,"mode");J([p()],$.prototype,"skills");var At=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,vt=(i,e,t,o)=>{for(var r=o>1?void 0:o?Bt(e,t):e,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&At(e,t,r),r};const tt=class tt extends pt{get skills(){return this.model.skills}constructor(){super("bigbrother:model")}render(){var t;function e(o){return n`
                <skill-yuh
                    href="/app/skills/${o._id}"
                    cat-color="skill--${o.category}"
                    icon=${o.category}
                    title=${o.title}
                >
                    <button slot="action" class="skill-btn" onclick="event.stopPropagation()">Star</button>
                </skill-yuh>
            `}return n`
            <h2>Skills</h2>
            <br>
            ${(t=this.skills)==null?void 0:t.map(e)}
        `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="user-id"&&t!==o&&o&&this.dispatchMessage(["skill/index",{userid:o}])}};tt.styles=[d.styles,c`        
            .skill-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let z=tt;vt([l({attribute:"user-id"})],z.prototype,"userid",2);vt([p()],z.prototype,"skills",1);const Mt=c`
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
`,K={styles:Mt};function gt(i){return i?i.charAt(0).toUpperCase()+i.slice(1):""}var Rt=Object.defineProperty,U=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Rt(e,t,r),r};const rt=class rt extends h{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title",this.icon=""}render(){return n`
        <a href=${this.href} class="skill-link">
            <div class="skill ${this.catColor}">
              <div class="skill-icon">${gt(this.icon)}</div>
              <div class="skill-title">${this.title}</div>
              <slot name="action"><button class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button></slot>
            </div>
        </a>
    `}};rt.styles=[d.styles,K.styles,c`
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
    `];let v=rt;U([l()],v.prototype,"href");U([l({attribute:"cat-color"})],v.prototype,"catColor");U([l()],v.prototype,"title");U([l()],v.prototype,"icon");var Ut=Object.defineProperty,Q=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Ut(e,t,r),r};const M=class M extends h{constructor(){super(...arguments),this.mode="view"}get src(){return`/api/skills/expand/${this.skillid}`}render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <back-button></back-button>
                <skill-expand-wrapper src=${this.src}></skill-expand>
            </div>
        `}};M.uses=R({"mu-form":H.Element}),M.styles=[d.styles,f.styles,j.styles];let w=M;Q([l({attribute:"user-id"})],w.prototype,"userid");Q([l({attribute:"skill-id"})],w.prototype,"skillid");Q([l()],w.prototype,"mode");var Ft=Object.defineProperty,S=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Ft(e,t,r),r};const et=class et extends h{constructor(){super(...arguments),this.title="",this.category="",this.description="",this.resources=[],this._authObserver=new dt(this,"bigbrother:auth")}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}render(){const{resources:e}=this;function t(o){return n`
                <a 
                    class="resource" 
                    href=${o.url}
                    target="_blank"
                >
                    ${o.type}: ${o.label}
                </a>
                <br>
            `}return n`
            <skill-expand 
                title=${this.title} 
                category=${gt(this.category)}
                cat-color=skill--${this.category}
                icon=${this.category.substring(0,1).toUpperCase()}
            >
                <div slot="description">${this.description}</div>
                <button slot="favorite" class="skill-expand-favorite-btn" onclick="event.stopPropagation()">Star</button>
                <div slot="resources">
                    ${e.map(t)}
                </div>
            </skill-expand>
        `}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user}),this.src&&this.hydrate(this.src)}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="src"&&t!==o&&o&&this.hydrate(o)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.title=o.title,this.category=o.category,this.description=o.description,this.resources=o.resources}})}};et.styles=c`  
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
        `;let u=et;S([l()],u.prototype,"src");S([p()],u.prototype,"title");S([p()],u.prototype,"category");S([p()],u.prototype,"description");S([p()],u.prototype,"resources");var Tt=Object.defineProperty,F=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Tt(e,t,r),r};const ot=class ot extends h{constructor(){super(...arguments),this.catColor="skill--custom",this.title="Filler Title",this.category="custom",this.icon="C"}render(){return n`
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
    `}};ot.styles=[d.styles,K.styles,c`
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


    `];let g=ot;F([l({attribute:"cat-color"})],g.prototype,"catColor");F([l()],g.prototype,"title");F([l()],g.prototype,"category");F([l()],g.prototype,"icon");var qt=Object.defineProperty,Ht=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&qt(e,t,r),r};const st=class st extends h{render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <todo-list src="/data/todo-list.json"></todo-list>
            </div>
        `}};st.styles=[d.styles,f.styles,j.styles];let D=st;Ht([l({attribute:"user-id"})],D.prototype,"userid");var Wt=Object.defineProperty,X=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Wt(e,t,r),r};const it=class it extends h{constructor(){super(...arguments),this.highPriorities=[],this.lowPriorities=[]}render(){function e(o){return n`
                <skill-yuh
                href=${o.href}
                cat-color=${o.catColor}
                icon=${o.icon}
                title=${o.title}
                >
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Unprioritize</button>
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
                </skill-yuh>
            `}function t(o){return n`
                <skill-yuh
                href=${o.href}
                cat-color=${o.catColor}
                icon=${o.icon}
                title=${o.title}
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
                ${this.lowPriorities.map(t)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.highPriorities=o.filter(r=>r.priority),this.lowPriorities=o.filter(r=>!r.priority)}})}};it.styles=[d.styles,c`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let C=it;X([l()],C.prototype,"src");X([p()],C.prototype,"highPriorities");X([p()],C.prototype,"lowPriorities");var Yt=Object.defineProperty,Gt=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Yt(e,t,r),r};const at=class at extends h{render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <log-yuh src="/data/log.json"></log-yuh>
            </div>
        `}};at.styles=[d.styles,f.styles,j.styles];let I=at;Gt([l({attribute:"user-id"})],I.prototype,"userid");var Jt=Object.defineProperty,bt=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Jt(e,t,r),r};const nt=class nt extends h{constructor(){super(...arguments),this.reflections=[]}render(){function e(t){return n`
                <reflection-yuh
                    date=${t.date}
                    title=${t.title}
                    cat-color=${t.catColor}
                    href="skill-expand.html"
                >
                    <span slot="description">
                        ${t.description}
                    </span>
                </reflection-yuh>
            `}return n`
            <div class="container">
                <h2>Log</h2>
                ${this.reflections.map(e)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.reflections=o}})}};nt.styles=[d.styles,c`        
        `];let O=nt;bt([l()],O.prototype,"src");bt([p()],O.prototype,"reflections");const Kt=c`
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
`,Qt={styles:Kt};var Xt=Object.defineProperty,T=(i,e,t,o)=>{for(var r=void 0,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(e,t,r)||r);return r&&Xt(e,t,r),r};const lt=class lt extends h{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title"}render(){return n`
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
        `}};lt.styles=[d.styles,Qt.styles,K.styles];let b=lt;T([l()],b.prototype,"href");T([l({attribute:"cat-color"})],b.prototype,"catColor");T([l()],b.prototype,"title");T([l()],b.prototype,"date");const Zt=[{path:"/app",view:()=>n`
      <home-view></home-view>
    `},{path:"/app/skills",view:()=>n`
      <skill-list-view></skill-list-view>
    `},{path:"/app/skills/:skillid",view:i=>n`
      <skill-expand-view skill-id=${i.skillid}>Skill expanded</skill-expand-view>
    `},{path:"/app/todo",view:()=>n`
      <todo-view>Todo list</todo-view>
    `},{path:"/app/log",view:()=>n`
      <log-view>Hey</log-view>
    `},{path:"/",redirect:"/app"}];R({"mu-auth":ct.Provider,"mu-history":kt.Provider,"mu-switch":class extends xt.Element{constructor(){super(Zt,"bigbrother:history","bigbrother:auth")}},"mu-store":class extends yt.Provider{constructor(){super($t,mt,"bigbrother:auth")}},"back-button":q,"navbar-yuh":y,"home-view":x,"todo-index":P,"task-todo":m,"recents-yuh":_,"skill-list-view":$,"skill-list":z,"skill-yuh":v,"skill-expand-view":w,"skill-expand-wrapper":u,"skill-expand":g,"todo-view":D,"todo-list":C,"log-view":I,"log-yuh":O,"reflection-yuh":b});document.getElementById("mode-toggle");document.body.addEventListener("darkmode:toggle",i=>{i.detail.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),console.log("in custom event")});
