import{i as p,x as c,r as f,a as u,n as h,b as x,d as P,c as _}from"./reset.css-7s6RLoVs.js";import{p as C,N as y}from"./navbar-BOMpJKeZ.js";var w=Object.defineProperty,v=(s,r,t,n)=>{for(var o=void 0,e=s.length-1,a;e>=0;e--)(a=s[e])&&(o=a(r,t,o)||o);return o&&w(r,t,o),o};const b=class b extends p{constructor(){super(...arguments),this.href="",this.title="Default Title"}render(){return c`
      <a href=${this.href} class="task-todo-link">
          <div class="task-todo">
            <div class="task-todo-icon">${this.svgSrc}</div>
            <div class="task-todo-title">${this.title}</div>
            <slot="action"><button class="task-todo-edit-btn" onclick="event.stopPropagation()">Done?</button></slot>
          </div>
      </a>
    `}};b.styles=[f.styles,u`
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
    `];let i=b;v([h()],i.prototype,"href");v([h()],i.prototype,"title");v([h({attribute:"svg-src"})],i.prototype,"svgSrc");var z=Object.defineProperty,$=(s,r,t,n)=>{for(var o=void 0,e=s.length-1,a;e>=0;e--)(a=s[e])&&(o=a(r,t,o)||o);return o&&z(r,t,o),o};const k=class k extends p{constructor(){super(...arguments),this.todos=[]}render(){function r(t){return c`
                <task-todo 
                    href=${t.href} 
                    title=${t.title}
                    svg-src=${t.svg}
                >
                    <button slot="action" onclick="event.stopPropagation()">Done?</button>
                </task-todo>
            `}return c`
            <h2>In Progress...</h2>
            <br>
            ${this.todos.map(r)}
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(r){fetch(r).then(t=>t.json()).then(t=>{if(t){const n=t;this.todos=n}})}};k.styles=[f.styles,u`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let d=k;$([h()],d.prototype,"src");$([x()],d.prototype,"todos");var j=Object.defineProperty,m=(s,r,t,n)=>{for(var o=void 0,e=s.length-1,a;e>=0;e--)(a=s[e])&&(o=a(r,t,o)||o);return o&&j(r,t,o),o};const g=class g extends p{constructor(){super(...arguments),this.recents=[]}render(){function r(t){return c`
                <a href=${t.href}>${t.title}</a>
            `}return c`
            <div class="container">
                <h3>Recent Accomplishments</h3>
                <br>
                ${this.recents.map(r)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(r){fetch(r).then(t=>t.json()).then(t=>{if(t){const n=t;this.recents=n}})}};g.styles=[f.styles,C.styles,u`        
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
        `];let l=g;m([h()],l.prototype,"src");m([x()],l.prototype,"recents");P({"task-todo":i,"navbar-yuh":y,"mu-auth":_.Provider,"todo-index":d,"recents-yuh":l});y.initializeOnce();
