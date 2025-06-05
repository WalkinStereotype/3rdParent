import { Skill, Interest, Log } from "server/models";

export type Msg = 
    | ["skill/select", { skillid: string }]
    | ["skill/index", { userid: string }]
    | ["skill/create", { skill: Skill }]
    | ["skill/update", { skillid: string, skill: Skill }]
    | ["skill/delete", { skillid: string }]
    | ["interest/create", { interest: Interest }]
    | ["interest/update", { interestid: string, priority: boolean }]
    | ["interest/delete", { interestid: string }]
    | ["log/select", { logid: string }]
    | ["log/create", { log: Log }]
    | ["log/update", { logid: string, reflection: string }]
    | ["log/delete", { logid: string }]
;