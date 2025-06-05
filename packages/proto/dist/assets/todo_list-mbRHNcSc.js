import{i as u,x as n,r as b,a as p,n as f,b as d,d as v}from"./reset.css-7s6RLoVs.js";import{N as k}from"./navbar-BOMpJKeZ.js";import{S as y}from"./skill-C3c_OpNc.js";import"./skill-color.css-C6FHdvjI.js";var P=Object.defineProperty,l=(c,o,i,t)=>{for(var r=void 0,s=c.length-1,h;s>=0;s--)(h=c[s])&&(r=h(o,i,r)||r);return r&&P(o,i,r),r};const a=class a extends u{constructor(){super(...arguments),this.highPriorities=[],this.lowPriorities=[]}render(){function o(t){return n`
                <skill-yuh
                href=${t.href}
                cat-color=${t.catColor}
                icon=${t.icon}
                title=${t.title}
                >
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Unprioritize</button>
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
                </skill-yuh>
            `}function i(t){return n`
                <skill-yuh
                href=${t.href}
                cat-color=${t.catColor}
                icon=${t.icon}
                title=${t.title}
                >
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Prioritize</button>
                <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Remove</button>
                </skill-yuh>
            `}return n`
            <div class="todo-actual">
                <h2>To-Do</h2>
                <br>
                ${this.highPriorities.map(o)}
            </div>
            <br>
            <br>
            <div class="todo-interested">
                <h2>Interested</h2>
                <br>
                ${this.lowPriorities.map(i)}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(o){fetch(o).then(i=>i.json()).then(i=>{if(i){const t=i;this.highPriorities=t.filter(r=>r.priority),this.lowPriorities=t.filter(r=>!r.priority)}})}};a.styles=[b.styles,p`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let e=a;l([f()],e.prototype,"src");l([d()],e.prototype,"highPriorities");l([d()],e.prototype,"lowPriorities");v({"navbar-yuh":k,"skill-yuh":y,"todo-list":e});
