import { Interest, Log, Skill } from "server/models";

export interface Model {
    interests?: Interest[];
    logs?: Log[];
    skills?: Skill[];
}

export const init: Model = {};