
// import { html, LitElement } from "lit";
import { html } from "lit";
// import { property, state } from "lit/decorators.js";
import { state } from "lit/decorators.js";
import { define, Form, View, Auth, Observer } from "@calpoly/mustang";

import { Msg } from "../messages";
import { Model } from "../model";

import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import home from "../styles/home.css.ts";
import searchbar from "../styles/searchbar.css.ts";

export class HomeViewElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element
  });

  // @property({attribute: "user-id"})
  // userid?: string;

  @state()
  todosHome?: string[];

  @state()
  recents?: string[];

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  _authObserver = new Observer<Auth.Model>(this, "bigbrother:auth");
  _user?: Auth.User;

  get authorization() {
    return (
      this._user?.authenticated && {
        Authorization:
          `Bearer ${(this._user as Auth.AuthenticatedUser).token}`
      }
    );
  }

  connectedCallback() {
    super.connectedCallback();

    //Auth
    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user && user.authenticated ) {
        this.loggedIn = true;
        this.userid = user.username;

      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });

  }

  render() {
    return html`
        <div class="container">
            <div class="main">
              <div class="searchbar">Search...</div>
              <todo-index src="/data/todo-list-index.json"></todo-index>
            </div>
        
            <div class="extra">
              <recents-yuh src="/data/recents.json"></recents-yuh>
            </div>
        </div>
    `;
  }

  static styles = [
      reset.styles,
      page.styles,
      home.styles,
      searchbar.styles
  ];

}

