import{a as D,i as g,b as f,x as n,r as v,V as y,O as rt,e as St,c as p,d as L,f as q,n as c,h as ot,s as Dt,_ as It}from"./state-Ddp80qzq.js";const Rt={};function Mt(s,e,t){switch(s[0]){case"login/success":e(l=>({...l,userid:s[1].userid}));break;case"skill/index":o(s[1],t).then(l=>e(d=>({...d,skills:l})));break;case"skill/select":e(l=>({...l,skillid:s[1].skillid}));break;case"skill/create":break;case"skill/update":break;case"skill/delete":break;case"interest/index":r(s[1],t).then(l=>e(d=>({...d,interests:l})));break;case"interest/create":break;case"interest/update":break;case"interest/delete/ids":break;case"interest/delete/fields":break;case"log/select":break;case"log/index":i(s[1],t).then(l=>e(d=>({...d,logs:l})));break;case"log/create":a(s[1],t).then(l=>e(d=>({...d,editingLog:l}))).then(()=>{const{onSuccess:l}=s[1];l&&l()}).catch(l=>{const{onFailure:d}=s[1];d&&d(l)});break;case"log/update":x(s[1],t).then(l=>e(d=>({...d,editingLog:l}))).then(()=>{const{onSuccess:l}=s[1];l&&l()}).catch(l=>{const{onFailure:d}=s[1];d&&d(l)});break;case"log/delete":break;default:const u=s[0];throw new Error(`Unhandled message "${u}"`)}function o(u,l){const{userid:d}=u;return fetch(`/api/skills/list/${d}`,{headers:D.headers(l)}).then(h=>{if(h.status===200)return h.json()}).then(h=>{if(h)return console.log("Skills:",h),h})}function r(u,l){const{userid:d}=u;return fetch(`/api/interests/${d}`,{headers:D.headers(l)}).then(h=>{if(h.status===200)return h.json()}).then(h=>{if(h)return console.log("Interests:",h),h})}function i(u,l){const{userid:d}=u;return fetch(`/api/logs/list/${d}`,{headers:D.headers(l)}).then(h=>{if(h.status===200)return h.json()}).then(h=>{if(h)return console.log("Log:",h),h})}function a(u,l){return fetch("/api/logs",{method:"POST",headers:{"Content-Type":"application/json",...D.headers(l)},body:JSON.stringify(u.log)}).then(d=>{if(d.status===201||d.status===200)return d.json();throw new Error(`Failed to create log for ${u.log.userID}`)}).then(d=>{if(d)return d})}function x(u,l){return fetch(`/api/logs/${u.logid}`,{method:"PUT",headers:{"Content-Type":"application/json",...D.headers(l)},body:JSON.stringify(u.log)}).then(d=>{if(d.status===200)return d.json();throw new Error(`Failed to save profile for ${u.userid}`)}).then(d=>{if(d)return d})}}const Lt=g`
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

`,j={styles:Lt},ct=class ct extends f{render(){return n`
            <button @click=${this.handleBack}>
            <svg class="icon">
                <use href="/icons/sprite.svg#icon-back"></use>
            </svg>
            <span style="font-size: 1.7rem;">Back</span>
            </button>
        `}handleBack(){window.history.length>1?window.history.back():window.location.href="/app"}};ct.styles=[v.styles,j.styles,g`
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
        `];let et=ct;var Ft=Object.defineProperty,Pt=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&Ft(e,t,r),r};const dt=class dt extends y{constructor(){var t;super("bigbrother:model"),this.loggedIn=!1,this._authObserver=new rt(this,"bigbrother:auth");const e=(t=this.shadowRoot)==null?void 0:t.querySelector("mode-toggle");e==null||e.addEventListener("click",o=>{o.stopPropagation();const r=o.target,i=r.checked,a=new CustomEvent("darkmode:toggle",{bubbles:!0,composed:!0,detail:{checked:i}});r.dispatchEvent(a),console.log("dark mode triggered")})}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{const{user:t}=e;t&&t.authenticated?(this.loggedIn=!0,this.userid=t.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return n`
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
            <a href="/app/skills/${this.userid}">
              <svg class="nav-icon">
                <use href="/icons/sprite.svg#icon-skills" />
              </svg>
              <span class="nav-label">Skills</span>
            </a>
            <br>
            <a href="/app/todo/${this.userid}">
              <svg class="nav-icon">
                <use href="/icons/sprite.svg#icon-todo" />
              </svg>
              <span class="nav-label">To-Do</span>
            </a>
            <br>
            <a href="/app/log/${this.userid}">
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
                    ${this.userid||"Who r u"}
                  </span>
              </button>

              <div 
                  popover 
                  id="profile-popover"
                  class="sign-in-out-popover"
              >
                  <div>${this.userid||"Who r u"}</div>
                  <div class="stats">Skills learned: 0</div>
                  ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
              </div>
          </div>
        </div>
      </div>
    `}renderSignOutButton(){return n`
      <a
        class="signing-btn"
        @click=${e=>{St.relay(e,"auth:message",["auth/signout"])}}
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
    `}static initializeOnce(){function e(t,o){t==null||t.classList.toggle("dark-mode",o)}document.body.addEventListener("darkmode:toggle",t=>e(t.currentTarget,t.detail.checked)),console.log("in custom event")}};dt.styles=[v.styles,j.styles,g`
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
    `];let B=dt;Pt([p()],B.prototype,"loggedIn");Pt([p()],B.prototype,"userid");const Bt=g`
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
`,Ut={styles:Bt},At=g`
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
`,J={styles:At};var Tt=Object.defineProperty,K=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&Tt(e,t,r),r};const N=class N extends y{constructor(){super(...arguments),this.loggedIn=!1,this._authObserver=new rt(this,"bigbrother:auth")}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{const{user:t}=e;t&&t.authenticated?(this.loggedIn=!0,this.userid=t.username):(this.loggedIn=!1,this.userid=void 0)})}render(){return n`
        <div class="container">
            <div class="main">
              <div class="searchbar">Search...</div>
              <todo-index src="/data/todo-list-index.json"></todo-index>
            </div>
        
            <div class="extra">
              <recents-yuh src="/data/recents.json"></recents-yuh>
            </div>
        </div>
    `}};N.uses=L({"mu-form":q.Element}),N.styles=[v.styles,j.styles,Ut.styles,J.styles];let m=N;K([p()],m.prototype,"todosHome");K([p()],m.prototype,"recents");K([p()],m.prototype,"loggedIn");K([p()],m.prototype,"userid");var Ht=Object.defineProperty,Ct=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&Ht(e,t,r),r};const pt=class pt extends f{constructor(){super(...arguments),this.todos=[]}render(){function e(t){return n`
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
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.todos=o}})}};pt.styles=[v.styles,g`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let U=pt;Ct([c()],U.prototype,"src");Ct([p()],U.prototype,"todos");var qt=Object.defineProperty,st=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&qt(e,t,r),r};const ht=class ht extends f{constructor(){super(...arguments),this.href="",this.title="Default Title"}render(){return n`
      <a href=${this.href} class="task-todo-link">
          <div class="task-todo">
            <div class="task-todo-icon">${this.svgSrc}</div>
            <div class="task-todo-title">${this.title}</div>
            <slot="action"><button class="task-todo-edit-btn" onclick="event.stopPropagation()">Done?</button></slot>
          </div>
      </a>
    `}};ht.styles=[v.styles,g`
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
    `];let I=ht;st([c()],I.prototype,"href");st([c()],I.prototype,"title");st([c({attribute:"svg-src"})],I.prototype,"svgSrc");var Jt=Object.defineProperty,Ot=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&Jt(e,t,r),r};const ut=class ut extends f{constructor(){super(...arguments),this.recents=[]}render(){function e(t){return n`
                <a href=${t.href}>${t.title}</a>
            `}return n`
            <div class="container">
                <h3>Recent Accomplishments</h3>
                <br>
                ${this.recents.map(e)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.recents=o}})}};ut.styles=[v.styles,g`        
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
        `];let A=ut;Ot([c()],A.prototype,"src");Ot([p()],A.prototype,"recents");var Nt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Q=(s,e,t,o)=>{for(var r=o>1?void 0:o?Yt(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&Nt(e,t,r),r};const Y=class Y extends y{constructor(){super("bigbrother:store"),this.mode="view"}get skills(){return this.model.skills}get interests(){return this.model.interests}render(){var a,x,u;const e=new Set((a=this.interests)==null?void 0:a.map(l=>l.skillID));console.log("interestSkillIDs:",e);const t=(x=this.skills)==null?void 0:x.filter(l=>e.has(l._id?l._id:"")),o=(u=this.skills)==null?void 0:u.filter(l=>!e.has(l._id?l._id:""));function r(l){return l?n`<button slot="action" class="skill-btn" onclick="event.stopPropagation()">Star</button>`:'<button slot="action" class="skill-btn" onclick="event.stopPropagation()">Unstar</button>'}function i(l,d,h){return n`
                <skill-yuh
                    href="/app/skills/${d}/${l._id}"
                    cat-color="skill--${l.category}"
                    icon=${l.category}
                    title=${l.title}
                >
                    ${r(h)}
                </skill-yuh>
            `}return console.log("Rendering skills:",this.skills),n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <div>
                    <h2>Skills</h2>
                    <br>
                    ${t==null?void 0:t.map(l=>i(l,this.userid?this.userid:"guest",!0))}
                    ${o==null?void 0:o.map(l=>i(l,this.userid?this.userid:"guest",!1))}
                </div>
            </div>
        `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),console.log("oldvalue",t,"newvalue",o,e),e==="user-id"&&t!==o&&o&&(this.dispatchMessage(["skill/index",{userid:o}]),this.dispatchMessage(["interest/index",{userid:o}])),console.log("Inside skill-list attribute callback")}};Y.uses=L({"mu-form":q.Element}),Y.styles=[v.styles,j.styles,J.styles,g`        
            .skill-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let $=Y;Q([c({attribute:"user-id"})],$.prototype,"userid",2);Q([c()],$.prototype,"mode",2);Q([p()],$.prototype,"skills",1);Q([p()],$.prototype,"interests",1);var Gt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,zt=(s,e,t,o)=>{for(var r=o>1?void 0:o?Kt(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&Gt(e,t,r),r};const gt=class gt extends y{get skills(){return this.model.skills}constructor(){super("bigbrother:model")}render(){var t;function e(o){return n`
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
        `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="user-id"&&t!==o&&o&&this.dispatchMessage(["skill/index",{userid:o}])}};gt.styles=[v.styles,g`        
            .skill-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let T=gt;zt([c({attribute:"user-id"})],T.prototype,"userid",2);zt([p()],T.prototype,"skills",1);const Qt=g`
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
`,it={styles:Qt};function at(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}var Wt=Object.defineProperty,W=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&Wt(e,t,r),r};const vt=class vt extends f{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title",this.icon=""}render(){return n`
        <div class="skill ${this.catColor}">
            <a href=${this.href} class="skill-link">
                <div class="skill-icon">${at(this.icon)}</div>
                <div class="skill-title">${this.title}</div>
            </a>

            <slot name="action"><button class="skill-favorite-btn" onclick="console.log("click")">Star</button></slot>
        </div>
        
    `}};vt.styles=[v.styles,it.styles,g`
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
    `];let w=vt;W([c()],w.prototype,"href");W([c({attribute:"cat-color"})],w.prototype,"catColor");W([c()],w.prototype,"title");W([c()],w.prototype,"icon");var Xt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,lt=(s,e,t,o)=>{for(var r=o>1?void 0:o?Zt(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&Xt(e,t,r),r};const G=class G extends y{get skill(){var e;return(e=this.model.skills)==null?void 0:e.find(t=>t._id===this.skillid)}constructor(){super("bigbrother:store")}render(){var o,r,i,a,x;const e=this.skill?this.skill.resources:[];function t(u){return n`
                <a 
                    class="resource" 
                    href=${u.url}
                    target="_blank"
                >
                    ${u.type}: ${u.label}
                </a>
                <br>
            `}return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <back-button></back-button>
                
                <skill-expand 
                    user-id=${this.userid}
                    skill-id=${this.skillid}
                    title=${(o=this.skill)==null?void 0:o.title} 
                    category=${at((r=this.skill)!=null&&r.category?this.skill.category:"")}
                    cat-color=skill--${(i=this.skill)!=null&&i.category?this.skill.category:""}
                    icon=${((a=this.skill)!=null&&a.category?this.skill.category:"").substring(0,1).toUpperCase()}
                >
                    <div slot="description">${(x=this.skill)==null?void 0:x.description}</div>
                    <button slot="favorite" class="skill-expand-favorite-btn" onclick="event.stopPropagation()">Star</button>
                    <div slot="resources">
                        ${e.map(t)}
                    </div>
                </skill-expand>
            </div>
        `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="skill-id"&&t!==o&&o&&this.dispatchMessage(["skill/select",{skillid:o}])}};G.uses=L({"mu-form":q.Element}),G.styles=[v.styles,j.styles,J.styles,g`  
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
        `];let R=G;lt([c({attribute:"user-id"})],R.prototype,"userid",2);lt([c({attribute:"skill-id"})],R.prototype,"skillid",2);lt([p()],R.prototype,"skill",1);var Et=Object.defineProperty,S=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&Et(e,t,r),r};const bt=class bt extends f{constructor(){super(...arguments),this.title="",this.category="",this.description="",this.resources=[],this.userid="",this.skillid="",this._authObserver=new rt(this,"bigbrother:auth")}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}render(){const{resources:e}=this;function t(o){return n`
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
                user-id=${this.userid}
                skill-id=${this.skillid}
                title=${this.title} 
                category=${at(this.category)}
                cat-color=skill--${this.category}
                icon=${this.category.substring(0,1).toUpperCase()}
            >
                <div slot="description">${this.description}</div>
                <button slot="favorite" class="skill-expand-favorite-btn" onclick="event.stopPropagation()">Star</button>
                <div slot="resources">
                    ${e.map(t)}
                </div>
            </skill-expand>
        `}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user}),this.src&&this.hydrate(this.src)}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="src"&&t!==o&&o&&this.hydrate(o)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.title=o.title,this.category=o.category,this.description=o.description,this.resources=o.resources}})}};bt.styles=g`  
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
        `;let b=bt;S([c()],b.prototype,"src");S([p()],b.prototype,"title");S([p()],b.prototype,"category");S([p()],b.prototype,"description");S([p()],b.prototype,"resources");S([c({attribute:"user-id"})],b.prototype,"userid");S([c({attribute:"skill-id"})],b.prototype,"skillid");var Vt=Object.defineProperty,F=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&Vt(e,t,r),r};const ft=class ft extends f{constructor(){super(...arguments),this.catColor="skill--custom",this.title="Filler Title",this.category="custom",this.icon="C",this.userid="",this.skillid=""}render(){return n`
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
        <a href="/app/log/add/${this.userid}/${this.skillid}" class="resource">Write reflection</a>
        <br>
    `}};ft.styles=[v.styles,it.styles,g`
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


    `];let k=ft;F([c({attribute:"cat-color"})],k.prototype,"catColor");F([c()],k.prototype,"title");F([c()],k.prototype,"category");F([c()],k.prototype,"icon");F([c({attribute:"user-id"})],k.prototype,"userid");F([c({attribute:"skill-id"})],k.prototype,"skillid");var te=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,X=(s,e,t,o)=>{for(var r=o>1?void 0:o?ee(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&te(e,t,r),r};const kt=class kt extends y{constructor(){super("bigbrother:store"),this.highPriorities=[],this.lowPriorities=[]}get interests(){return this.model.interests}render(){return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <todo-list src="/data/todo-list.json"></todo-list>
            </div>
        `}};kt.styles=[v.styles,j.styles,J.styles];let _=kt;X([c({attribute:"user-id"})],_.prototype,"userid",2);X([p()],_.prototype,"interests",1);X([p()],_.prototype,"highPriorities",2);X([p()],_.prototype,"lowPriorities",2);var re=Object.defineProperty,nt=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&re(e,t,r),r};const yt=class yt extends f{constructor(){super(...arguments),this.highPriorities=[],this.lowPriorities=[]}render(){function e(o){return n`
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
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.highPriorities=o.filter(r=>r.priority),this.lowPriorities=o.filter(r=>!r.priority)}})}};yt.styles=[v.styles,g`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let M=yt;nt([c()],M.prototype,"src");nt([p()],M.prototype,"highPriorities");nt([p()],M.prototype,"lowPriorities");var oe=Object.defineProperty,se=Object.getOwnPropertyDescriptor,Z=(s,e,t,o)=>{for(var r=o>1?void 0:o?se(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&oe(e,t,r),r};const xt=class xt extends y{get logs(){return this.model.logs}get skills(){return this.model.skills}get hydratedLogs(){var t;const e=(t=this.logs)==null?void 0:t.map(o=>{var r;return{...o,skill:(r=this.skills)==null?void 0:r.find(i=>i._id===this.model.skills)}});return e==null?void 0:e.filter(o=>o.skill!==void 0)}constructor(){super("bigbrother:store")}render(){var t;function e(o){var r,i;return n`
                <reflection-yuh
                    date="date"
                    title=${(r=o.skill)==null?void 0:r.title}
                    cat-color="skill--${(i=o.skill)==null?void 0:i.category}"
                    href="skill-expand.html"
                >
                    <span slot="description">
                        ${o.reflection}
                    </span>
                </reflection-yuh>
            `}return n`
            <div class="main">
                <div class="searchbar">Search...</div>
                <div class="container">
                    <h2>Log</h2>
                    ${(t=this.hydratedLogs)==null?void 0:t.map(e)}
                </div>
            </div>
        `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),e==="user-id"&&t!==o&&o&&this.dispatchMessage(["log/index",{userid:o}])}};xt.styles=[v.styles,j.styles,J.styles];let P=xt;Z([c({attribute:"user-id"})],P.prototype,"userid",2);Z([p()],P.prototype,"logs",1);Z([p()],P.prototype,"skills",1);Z([p()],P.prototype,"hydratedLogs",1);var ie=Object.defineProperty,jt=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&ie(e,t,r),r};const mt=class mt extends f{constructor(){super(...arguments),this.reflections=[]}render(){function e(t){return n`
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
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{if(t){const o=t;this.reflections=o}})}};mt.styles=[v.styles,g`        
        `];let H=mt;jt([c()],H.prototype,"src");jt([p()],H.prototype,"reflections");const ae=g`
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
`,le={styles:ae};var ne=Object.defineProperty,E=(s,e,t,o)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(e,t,r)||r);return r&&ne(e,t,r),r};const $t=class $t extends f{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title"}render(){return n`
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
        `}};$t.styles=[v.styles,le.styles,it.styles];let C=$t;E([c()],C.prototype,"href");E([c({attribute:"cat-color"})],C.prototype,"catColor");E([c()],C.prototype,"title");E([c()],C.prototype,"date");var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,V=(s,e,t,o)=>{for(var r=o>1?void 0:o?de(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&ce(e,t,r),r};const wt=class wt extends y{constructor(){super(...arguments),this.placeholder="New..."}get log(){return this.model.editingLog}handleSubmit(e){this.dispatchMessage(["log/create",{log:e.detail,onSuccess:()=>ot.dispatch(this,"history/navigate",{href:`/app/log/${this.userid}`}),onFailure:t=>console.log("ERROR:",t)}])}render(){return n`
            <main class="page">
                <mu-form
                    .init=${this.log}
                    @mu-form:submit=${this.handleSubmit}>

                    <input
                        type="text"
                        name="description"
                        placeholder=${this.placeholder}
                        required
                    />

                </mu-form>
            </main>
        `}};wt.uses=L({"mu-form":q.Element});let O=wt;V([c()],O.prototype,"userid",2);V([c()],O.prototype,"skillid",2);V([c()],O.prototype,"placeholder",2);V([p()],O.prototype,"log",1);var pe=Object.defineProperty,he=Object.getOwnPropertyDescriptor,tt=(s,e,t,o)=>{for(var r=o>1?void 0:o?he(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(e,t,r):a(r))||r);return o&&r&&pe(e,t,r),r};const _t=class _t extends y{constructor(){super(...arguments),this.placeholder="New..."}get log(){return this.model.editingLog}handleSubmit(e){this.dispatchMessage(["log/update",{userid:this.userid?this.userid:"",logid:this.logid?this.logid:"",log:e.detail,onSuccess:()=>ot.dispatch(this,"history/navigate",{href:`/app/log/${this.userid}/${this.logid}`}),onFailure:t=>console.log("ERROR:",t)}])}render(){return n`
            <main class="page">
                <mu-form
                    .init=${this.log}
                    @mu-form:submit=${this.handleSubmit}>

                    <input
                        type="text"
                        name="description"
                        placeholder=${this.placeholder}
                        required
                    />

                </mu-form>
            </main>
        `}};_t.uses=L({"mu-form":q.Element});let z=_t;tt([c()],z.prototype,"userid",2);tt([c()],z.prototype,"logid",2);tt([c()],z.prototype,"placeholder",2);tt([p()],z.prototype,"log",1);const ue=[{path:"/app",view:()=>n`
      <home-view></home-view>
    `},{path:"/app/skills/:userid",view:s=>n`
      <skill-list-view user-id=${s.userid}></skill-list-view>
    `},{path:"/app/skills/:userid/:skillid",view:s=>n`
      <skill-expand-view user-id=${s.userid} skill-id=${s.skillid}>Skill expanded</skill-expand-view>
    `},{path:"/app/todo/:userid",view:s=>n`
      <todo-view user-id=${s.userid}>Todo list</todo-view>
    `},{path:"/app/log/:userid",view:s=>n`
      <log-view user-id=${s.userid}>Hey</log-view>
    `},{path:"/app/log/:userid/:logid",view:s=>n`
      <log-expand-view 
        user-id=${s.userid} 
        log-id=${s.logid}
      >
        Hey
      </log-expand-view>
    `},{path:"/app/log/add/:userid/:skillid",view:s=>n`
      <log-expand-add 
        user-id=${s.userid}
        skill-id=${s.skillid}
      >
        Hey
      </log-expand-add>
    `},{path:"/app/log/:userid/:logid/edit",view:s=>n`
      <log-expand-edit 
        user-id=${s.userid}
        log-id=${s.logid}
      >
        Hey
      </log-expand-edit>
    `},{path:"/",redirect:"/app"}];L({"mu-auth":D.Provider,"mu-history":ot.Provider,"mu-switch":class extends It.Element{constructor(){super(ue,"bigbrother:history","bigbrother:auth")}},"mu-store":class extends Dt.Provider{constructor(){super(Mt,Rt,"bigbrother:auth")}},"back-button":et,"navbar-yuh":B,"home-view":m,"todo-index":U,"task-todo":I,"recents-yuh":A,"skill-list-view":$,"skill-list":T,"skill-yuh":w,"skill-expand-view":R,"skill-expand-wrapper":b,"skill-expand":k,"todo-view":_,"todo-list":M,"log-view":P,"log-yuh":H,"reflection-yuh":C,"log-expand-add":O,"log-expand-edit":z});document.getElementById("mode-toggle");document.body.addEventListener("darkmode:toggle",s=>{s.detail.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),console.log("in custom event")});
