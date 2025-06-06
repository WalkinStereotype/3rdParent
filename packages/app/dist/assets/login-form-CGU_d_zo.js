import{b as d,x as u,r as m,i as b,c as p,n as h}from"./state-Ddp80qzq.js";var f=Object.defineProperty,n=(l,r,t,a)=>{for(var e=void 0,o=l.length-1,c;o>=0;o--)(c=l[o])&&(e=c(r,t,e)||e);return e&&f(r,t,e),e};const i=class i extends d{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return u`
      <form
        @change=${r=>this.handleChange(r)}
        @submit=${r=>this.handleSubmit(r)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit"
            class="login-btn"
          >
            <slot name="button-label">Login</slot>
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(r){const t=r.target,a=t==null?void 0:t.name,e=t==null?void 0:t.value,o=this.formData;switch(a){case"username":this.formData={...o,username:e};break;case"password":this.formData={...o,password:e};break}}handleSubmit(r){console.log("in login handleSubmit"),r.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:a}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:a,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};i.styles=[m.styles,b`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }

      .login-btn {
          background-color: #C8BEA4;
          margin-top: 5px;
          margin-botoom: 5px;
          font-family: var(--font-text);
          border: 1px solid var(--color-border-searchbar);
          padding: 4px 12px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 14px;
      }
  `];let s=i;n([p()],s.prototype,"formData");n([h()],s.prototype,"api");n([h()],s.prototype,"redirect");n([p()],s.prototype,"error");export{s as L};
