import{i as d,x as p,r as h,a as f,n as r,d as x}from"./reset.css-DmUNvvkv.js";import{N as v}from"./navbar-CIKKDtv3.js";import{s as b}from"./skill-color.css-CPk2sX6q.js";var g=Object.defineProperty,i=(e,s,n,k)=>{for(var o=void 0,a=e.length-1,c;a>=0;a--)(c=e[a])&&(o=c(s,n,o)||o);return o&&g(s,n,o),o};const l=class l extends d{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title"}render(){return p`
        <a href=${this.href} class="skill-link">
            <div class="skill ${this.catColor}">
              <div class="skill-icon">${this.icon}</div>
              <div class="skill-title">${this.title}</div>
              <slot="action"><button class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button></slot>
            </div>
        </a>
    `}};l.styles=[h.styles,b.styles,f`
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
    `];let t=l;i([r()],t.prototype,"href");i([r({attribute:"cat-color"})],t.prototype,"catColor");i([r()],t.prototype,"title");i([r()],t.prototype,"icon");x({"skill-yuh":t,"navbar-yuh":v});
