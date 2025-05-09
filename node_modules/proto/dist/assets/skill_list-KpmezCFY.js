import{i as d,x as p,r as h,a as f,d as x,N as g}from"./navbar-CQmFDbxj.js";import{n as i}from"./property-B2nmQAVS.js";import{s as v}from"./skill-color.css-CJj7uX2C.js";var b=Object.defineProperty,r=(a,s,n,k)=>{for(var o=void 0,e=a.length-1,c;e>=0;e--)(c=a[e])&&(o=c(s,n,o)||o);return o&&b(s,n,o),o};const l=class l extends d{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title"}render(){return p`
        <a href=${this.href} class="skill-link">
            <div class="skill ${this.catColor}">
              <div class="skill-icon">${this.icon}</div>
              <div class="skill-title">${this.title}</div>
              <slot="action"><button class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button></slot>
            </div>
        </a>
    `}};l.styles=[h.styles,v.styles,f`
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
            background-color: #C8BEA4;
            border: 1px solid var(--color-border-searchbar);
            padding: 4px 12px;
            border-radius: 24px;
            cursor: pointer;
            font-size: 14px;
        }

        .text-center {
            text-align: center;
        }
    `];let t=l;r([i()],t.prototype,"href");r([i({attribute:"cat-color"})],t.prototype,"catColor");r([i()],t.prototype,"title");r([i()],t.prototype,"icon");x({"skill-yuh":t,"navbar-yuh":g});
