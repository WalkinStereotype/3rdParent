import{i as h,x as c,r as p,a as u,b as k,n as f,d as b}from"./reset.css-7s6RLoVs.js";import{N as v}from"./navbar-BOMpJKeZ.js";import{S as y}from"./skill-C3c_OpNc.js";import"./skill-color.css-C6FHdvjI.js";var m=Object.defineProperty,d=(a,o,r,t)=>{for(var s=void 0,l=a.length-1,n;l>=0;l--)(n=a[l])&&(s=n(o,r,s)||s);return s&&m(o,r,s),s};const i=class i extends h{constructor(){super(...arguments),this.skills=[]}render(){const{skills:o}=this;function r(t){return c`
                <skill-yuh
                    href=${t.href}
                    cat-color=${t.catColor}
                    icon=${t.icon}
                    title=${t.title}
                >
                    <button slot="action" class="skill-favorite-btn" onclick="event.stopPropagation()">Star</button>
                </skill-yuh>
            `}return c`
            <h2>Skills</h2>
            <br>
            ${o.map(r)}
        `}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(o){fetch(o).then(r=>r.json()).then(r=>{if(r){const t=r;this.skills=t}})}};i.styles=[p.styles,u`        
            .skill-favorite-btn {
                color: var(--color-text-no-dark);
                background-color: var(--color-background-button-no-dark);
                border: 1px solid var(--color-border-searchbar);
                padding: 4px 12px;
                border-radius: 24px;
                cursor: pointer;
                font-size: 14px;
            }
        `];let e=i;d([f()],e.prototype,"src");d([k()],e.prototype,"skills");b({"skill-yuh":y,"navbar-yuh":v,"skill-list":e});
