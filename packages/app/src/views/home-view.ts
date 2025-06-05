
import { html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { define, Form } from "@calpoly/mustang";

import reset from "../styles/reset.css.ts";
import page from "../styles/page.css.ts";
import home from "../styles/home.css.ts";
import searchbar from "../styles/searchbar.css.ts";

export class HomeViewElement extends LitElement {
  static uses = define({
    "mu-form": Form.Element
  });

  @property({attribute: "user-id"})
  userid?: string;

  @state()
  todosHome?: string[];

  @state()
  recents?: string[];

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

