import{i as p,x as u,r as m,a as b,b as h,n as l,d as f,c as g}from"./reset.css-7s6RLoVs.js";var v=Object.defineProperty,i=(c,e,t,a)=>{for(var r=void 0,s=c.length-1,d;s>=0;s--)(d=c[s])&&(r=d(e,t,r)||r);return r&&v(e,t,r),r};const n=class n extends p{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return u`
      <form
        @change=${e=>this.handleChange(e)}
        @submit=${e=>this.handleSubmit(e)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit"
            class="login-btn">
            Login
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(e){const t=e.target,a=t==null?void 0:t.name,r=t==null?void 0:t.value,s=this.formData;switch(a){case"username":this.formData={...s,username:r};break;case"password":this.formData={...s,password:r};break}}handleSubmit(e){console.log("in login handleSubmit"),e.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:a}=t,r=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:a,redirect:this.redirect}]});console.log("dispatching message",r),this.dispatchEvent(r)}).catch(t=>{console.log(t),this.error=t.toString()})}};n.styles=[m.styles,b`
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
  `];let o=n;i([h()],o.prototype,"formData");i([l()],o.prototype,"api");i([l()],o.prototype,"redirect");i([h()],o.prototype,"error");f({"mu-auth":g.Provider,"login-form":o});
