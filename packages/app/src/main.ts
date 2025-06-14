import {
  Auth,
  define,
  History,
  Switch,
  Store
} from "@calpoly/mustang";
// import { html, LitElement } from "lit";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";

import { BackButtonElement } from "./components/backbutton";

import { NavBarElement } from "./components/navbar";

import { HomeViewElement } from "./views/home-view";
import { TodoListIndexElement } from "./components/todo-list-index";
import { TaskToDoElement } from "./components/todo-index";
import { RecentsElement } from "./components/recents";

import { SkillListViewElement } from "./views/skill-list-view";
import { SkillListElement } from "./components/skill-list";
import { SkillElement } from "./components/skill";

import { SkillExpandViewElement } from "./views/skill-expand-view";
import { SkillExpandWrapperElement } from "./components/skill-expand-wrapper";
import { SkillExpandElement } from "./components/skill-expand";

import { TodoViewElement } from "./views/todo-view";
import { TodoListElement } from "./components/todo-list";

import { LogViewElement } from "./views/log-view";
import { LogElement } from "./components/log";
import { ReflectionElement } from "./components/reflection";
import { LogAddElement } from "./components/log-add";
import { LogEditElement } from "./components/log-edit";


const routes = [
  {
    path: "/app",
    view: () => html`
      <home-view></home-view>
    `
  },
  {
    path: "/app/skills/:userid",
    view: (params: Switch.Params) => html`
      <skill-list-view user-id=${params.userid}></skill-list-view>
    `
  },
  {
    path: "/app/skills/:userid/:skillid",
    view: (params: Switch.Params) => html`
      <skill-expand-view user-id=${params.userid} skill-id=${params.skillid}>Skill expanded</skill-expand-view>
    `
  },
  {
    path: "/app/todo/:userid",
    view: (params: Switch.Params) => html`
      <todo-view user-id=${params.userid}>Todo list</todo-view>
    `
  },
  {
    path: "/app/log/:userid",
    view: (params: Switch.Params) => html`
      <log-view user-id=${params.userid}>Hey</log-view>
    `
  },
  {
    path: "/app/log/:userid/:logid",
    view: (params: Switch.Params) => html`
      <log-expand-view 
        user-id=${params.userid} 
        log-id=${params.logid}
      >
        Hey
      </log-expand-view>
    `
  },
  {
    path: "/app/log/add/:userid/:skillid",
    view: (params: Switch.Params) => html`
      <log-expand-add 
        user-id=${params.userid}
        skill-id=${params.skillid}
      >
        Hey
      </log-expand-add>
    `
  },
  {
    path: "/app/log/:userid/:logid/edit",
    view: (params: Switch.Params) => html`
      <log-expand-edit 
        user-id=${params.userid}
        log-id=${params.logid}
      >
        Hey
      </log-expand-edit>
    `
  },
  {
    path: "/",
    redirect: "/app"
  }
];

define({
    "mu-auth": Auth.Provider,
    "mu-history": History.Provider,
    "mu-switch": class AppSwitch extends Switch.Element {
        constructor() {
            super(routes, "bigbrother:history", "bigbrother:auth");
        }
    },
    "mu-store": class AppStore
      extends Store.Provider<Model, Msg>
    {
      constructor() {
        super(update, init, "bigbrother:auth");
      }
    },

    "back-button": BackButtonElement,

    "navbar-yuh": NavBarElement,

    "home-view": HomeViewElement,
    "todo-index": TodoListIndexElement,
    "task-todo": TaskToDoElement,
    "recents-yuh": RecentsElement,

    "skill-list-view": SkillListViewElement,
    "skill-list": SkillListElement,
    "skill-yuh": SkillElement,

    "skill-expand-view": SkillExpandViewElement,
    "skill-expand-wrapper": SkillExpandWrapperElement,
    "skill-expand": SkillExpandElement,

    "todo-view": TodoViewElement,
    "todo-list": TodoListElement,
    
    "log-view": LogViewElement,
    "log-yuh": LogElement,
    "reflection-yuh": ReflectionElement,
    "log-expand-add": LogAddElement,
    "log-expand-edit": LogEditElement,
});