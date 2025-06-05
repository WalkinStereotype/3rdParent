import{a as c,i as f,x as p,r as y,n as o,d as g}from"./reset.css-7s6RLoVs.js";import{N as b}from"./navbar-BOMpJKeZ.js";import{s as m}from"./skill-color.css-C6FHdvjI.js";const v=c`
    .log-entry {
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
        color: var(--color-text-no-dark);
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
`,u={styles:v};var x=Object.defineProperty,e=(s,l,n,h)=>{for(var r=void 0,a=s.length-1,d;a>=0;a--)(d=s[a])&&(r=d(l,n,r)||r);return r&&x(l,n,r),r};const i=class i extends f{constructor(){super(...arguments),this.href="",this.catColor="skill--custom",this.title="Default Title"}render(){return p`
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
        `}};i.styles=[y.styles,u.styles,m.styles];let t=i;e([o()],t.prototype,"href");e([o({attribute:"cat-color"})],t.prototype,"catColor");e([o()],t.prototype,"title");e([o()],t.prototype,"date");g({"navbar-yuh":b,"reflection-yuh":t});
