import{i as p,x as b,r as v,a as f,n as e,d as u,b as g}from"./reset.css-DmUNvvkv.js";import{N as c}from"./navbar-CIKKDtv3.js";var h=Object.defineProperty,a=(i,n,d,k)=>{for(var t=void 0,r=i.length-1,l;r>=0;r--)(l=i[r])&&(t=l(n,d,t)||t);return t&&h(n,d,t),t};const s=class s extends p{constructor(){super(...arguments),this.href="",this.title="Default Title"}render(){return b`
      <a href=${this.href} class="task-todo-link">
          <div class="task-todo">
            <div class="task-todo-icon">${this.svgSrc}</div>
            <div class="task-todo-title">${this.title}</div>
            <slot="action"><button class="task-todo-edit-btn" onclick="event.stopPropagation()">Done?</button></slot>
          </div>
      </a>
    `}};s.styles=[v.styles,f`
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
    `];let o=s;a([e()],o.prototype,"href");a([e()],o.prototype,"title");a([e({attribute:"svg-src"})],o.prototype,"svgSrc");u({"task-todo":o,"navbar-yuh":c,"mu-auth":g.Provider});c.initializeOnce();
