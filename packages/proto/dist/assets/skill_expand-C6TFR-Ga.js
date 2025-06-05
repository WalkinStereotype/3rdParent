import{i as b,x as f,r as g,a as x,n as p,O as y,b as n,d as k}from"./reset.css-7s6RLoVs.js";import{N as m}from"./navbar-BOMpJKeZ.js";import{s as C}from"./skill-color.css-C6FHdvjI.js";var $=Object.defineProperty,h=(c,t,o,r)=>{for(var e=void 0,s=c.length-1,d;s>=0;s--)(d=c[s])&&(e=d(t,o,e)||e);return e&&$(t,o,e),e};const u=class u extends b{constructor(){super(...arguments),this.catColor="skill--custom",this.title="Filler Title",this.category="custom",this.icon="C"}render(){return f`
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
            <div class="skill-expand-description"><slot="description">
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
    `}};u.styles=[g.styles,C.styles,x`
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


    `];let a=u;h([p({attribute:"cat-color"})],a.prototype,"catColor");h([p()],a.prototype,"title");h([p()],a.prototype,"category");h([p()],a.prototype,"icon");var _=Object.defineProperty,l=(c,t,o,r)=>{for(var e=void 0,s=c.length-1,d;s>=0;s--)(d=c[s])&&(e=d(t,o,e)||e);return e&&_(t,o,e),e};const v=class v extends b{constructor(){super(...arguments),this.title="",this.category="",this.catColor="",this.icon="",this.description="",this.resources=[],this._authObserver=new y(this,"bigbrother:auth")}get authorization(){var t;return((t=this._user)==null?void 0:t.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}render(){const{resources:t}=this;function o(r){return f`
                <a 
                    class="resource" 
                    href=${r.url}
                    target="_blank"
                >
                    ${r.type}: ${r.label}
                </a>
                <br>
            `}return f`
            <skill-expand 
                title=${this.title} 
                category=${this.category}
                cat-color=${this.catColor}
            >
                <div slot="icon">${this.icon}</div>
                <div slot="description">${this.description}</div>
                <button slot="favorite" class="skill-expand-favorite-btn" onclick="event.stopPropagation()">Star</button>
                <div slot="resources">
                    ${t.map(o)}
                </div>
            </skill-expand>
        `}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{this._user=t.user}),this.src&&this.hydrate(this.src)}attributeChangedCallback(t,o,r){super.attributeChangedCallback(t,o,r),t==="src"&&o!==r&&r&&this.hydrate(r)}hydrate(t){fetch(t).then(o=>o.json()).then(o=>{if(o){const r=o;this.title=r.title,this.category=r.category,this.catColor=r.catColor,this.icon=r.icon,this.description=r.description,this.resources=r.resources}})}};v.styles=x`  
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
        `;let i=v;l([p()],i.prototype,"src");l([n()],i.prototype,"title");l([n()],i.prototype,"category");l([n()],i.prototype,"catColor");l([n()],i.prototype,"icon");l([n()],i.prototype,"description");l([n()],i.prototype,"resources");k({"skill-expand":a,"skill-expand-wrapper":i,"navbar-yuh":m});
