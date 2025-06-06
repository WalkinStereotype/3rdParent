import { Interest, Log, Skill } from "server/models";

export interface Model {
    interests?: Array<Interest> | undefined;
    logs?: Array<Log> | undefined;
    skills?: Array<Skill> | undefined;
}

export const init: Model = {};