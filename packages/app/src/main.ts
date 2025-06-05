import {
  Auth,
  define,
  History,
  Switch
} from "@calpoly/mustang";
// import { html, LitElement } from "lit";
import { html } from "lit";

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


const routes = [
  {
    path: "/app",
    view: () => html`
      <home-view></home-view>
    `
  },
  {
    path: "/app/skills",
    view: () => html`
      <skill-list-view></skill-list-view>
    `
  },
  {
    path: "/app/skills/:skillid",
    view: (params: Switch.Params) => html`
      <skill-expand-view skill-id=${params.skillid}>Skill expanded</skill-expand-view>
    `
  },
  {
    path: "/app/todo",
    view: () => html`
      <todo-view>Todo list</todo-view>
    `
  },
  {
    path: "/app/log",
    view: () => html`
      <log-view>Hey</log-view>
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
    "reflection-yuh": ReflectionElement
});