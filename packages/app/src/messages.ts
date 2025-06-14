import { Skill, Interest, Log } from "server/models";

export type Msg = 
    | ["login/success", { userid: string }]
    | ["skill/select", { skillid: string }]
    | ["skill/index", { userid: string }]
    |   [
            "skill/create",
            { 
                skill: Skill;
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void; 
            }
        ]
    |   [
            "skill/update", 
            { 
                skillid: string, 
                skill: Skill
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void; 
            }
        ]
    |   [
            "skill/delete",
            { 
                skillid: string;
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void;  
            }
        ]
    | ["interest/index", { userid: string }]
    |   [
            "interest/create", 
            {
                interest: Interest;
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void;  
            }
        ]
    |   [
            "interest/update", 
            { 
                interestid: string; 
                interest: Interest;
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void; 
            }
        ]
    |   [
            "interest/delete/ids", 
            { 
                interestid: string;
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void; 
            }
        ]
    | ["interest/delete/fields", { skillid: string, userid: string }]
    | ["log/select", { logid: string }]
    | ["log/index", { userid: string }]
    |   [
            "log/create", 
            { 
                log: Log;
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void; 
            }
        ]
    |   [
            "log/update", 
            { 
                userid: string;
                logid: string; 
                log: Log; 
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void;
            }
        ]
    |   [
            "log/delete",
            { 
                logid: string;
                onSuccess?: () => void; 
                onFailure?: (err: Error) => void;
            }
        ]
;