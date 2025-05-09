import{i as c,x as p,r as f,a as b,d as v,N as g}from"./navbar-CQmFDbxj.js";import{n as e}from"./property-B2nmQAVS.js";var k=Object.defineProperty,s=(i,d,n,h)=>{for(var t=void 0,r=i.length-1,l;r>=0;r--)(l=i[r])&&(t=l(d,n,t)||t);return t&&k(d,n,t),t};const a=class a extends c{constructor(){super(...arguments),this.href="",this.title="Default Title"}render(){return p`
      <a href=${this.href} class="task-todo-link">
          <div class="task-todo">
            <div class="task-todo-icon">${this.svgSrc}</div>
            <div class="task-todo-title">${this.title}</div>
            <slot="action"><button class="task-todo-edit-btn" onclick="event.stopPropagation()">Done?</button></slot>
          </div>
      </a>
    `}};a.styles=[f.styles,b`
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
          background-color: #C8BEA4;
          border: 1px solid var(--color-border-searchbar);
          padding: 4px 12px;
          border-radius: 24px;
          cursor: pointer;
          font-size: 14px;
      }
    `];let o=a;s([e()],o.prototype,"href");s([e()],o.prototype,"title");s([e({attribute:"svg-src"})],o.prototype,"svgSrc");v({"task-todo":o,"navbar-yuh":g});
