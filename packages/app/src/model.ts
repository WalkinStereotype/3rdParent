import { Interest, Log, Skill } from "server/models";

export interface Model {
    userid?: string;
    interests?: Array<Interest> | undefined;
    logs?: Array<Log> | undefined;
    editingLog?: Log | undefined;
    skills?: Array<Skill> | undefined;
    skillid?: string | undefined;
    editingSkill?: Skill;
}

export const init: Model = {};