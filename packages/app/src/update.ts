import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";

import { Skill, Interest, Log } from "server/models";

export default function update(
    message: Msg,
    apply: Update.ApplyMap<Model>,
    user: Auth.User
) {
    switch (message[0]) {
        case "login/success":
            apply((model) => ({...model, userid: message[1].userid})); 
            break;

        case "skill/index":
            loadSkillList(message[1], user)
                .then((skills) =>
                    apply((model) =>
                        ({...model, skills})
                    )
                );
            break;

        // case "skill/select":
        //     loadSkill(message[1], user)
        //         .then((skillid) => 
        //             apply((model) =>
        //                 ({...model, skillid})
        //             )
        //         );
        //     break;

        case "skill/select":
            apply((model) =>
                ({...model, skillid: message[1].skillid})
            )
            break;
        
        case "skill/create":
            break;
        case "skill/update":
            break;
        case "skill/delete":
            break;

        case "interest/index":
            loadInterestList(message[1], user)
                .then((interests) =>
                    apply((model) =>
                        ({...model, interests})
                    )
                );
            break;
        
        case "interest/create":
            break;
        case "interest/update":
            break;
        case "interest/delete/ids":
            break;
        case "interest/delete/fields":
            break;

        case "log/select":
            break;
        case "log/index":
            loadLogList(message[1], user)
                .then((logs) =>
                    apply((model) =>
                        ({...model, logs})
                    )
                );
            break;
        case "log/create":
            createLog(message[1], user)
                .then((log) =>
                    apply((model) => ({...model, editingLog: log}))
                )
                .then(() => {
                    const { onSuccess } = message[1];
                    if (onSuccess) onSuccess();
                })
                .catch((error: Error) => {
                    const { onFailure } = message[1];
                    if (onFailure) onFailure(error);
                });
            break;

        case "log/update":
            updateLog(message[1], user)
                .then((log) => 
                    apply((model) => ({...model, editingLog: log}))
                )
                .then(() => {
                    const { onSuccess } = message[1];
                    if (onSuccess) onSuccess();
                })
                .catch((error: Error) => {
                    const { onFailure } = message[1];
                    if (onFailure) onFailure(error);
                });
            break;
        case "log/delete":
            break;
             
        default:
            const unhandled: never = message[0];
            throw new Error(`Unhandled message "${unhandled}"`);
    }

    function loadSkillList(
        payload: { userid: string },
        user: Auth.User
    ) {
        const { userid } = payload;
            
        return fetch(`/api/skills/list/${userid}`, {
            headers: Auth.headers(user)
        })
            .then((response: Response) => {
                if(response.status === 200) {
                    return response.json();
                }
                return undefined;
            })
            .then((json: unknown) => {
                if (json) {
                    console.log("Skills:", json);
                    return json as Skill[];
                }
            });
    }

    // function loadSkill(
    //     payload: { skillid: string },
    //     user: Auth.User
    // ) {
    //     const { skillid } = payload;

    //     return fetch(`/api/skills/expand/${skillid}`, {
    //         headers: Auth.headers(user)
    //     })
    //         .then((response: Response) => {
    //             if(response.status === 200) {
    //                 return response.json();
    //             }
    //             return undefined;
    //         })
    //         .then((json: unknown) => {
    //             if (json) {
    //                 console.log("Skill:", json);
    //                 return json as Skill;
    //             }
    //         })
    // }

    function loadInterestList(
        payload: { userid: string },
        user: Auth.User
    ) {
        const { userid } = payload;
            
        return fetch(`/api/interests/${userid}`, {
            headers: Auth.headers(user)
        })
            .then((response: Response) => {
                if(response.status === 200) {
                    return response.json();
                }
                return undefined;
            })
            .then((json: unknown) => {
                if (json) {
                    console.log("Interests:", json);
                    return json as Interest[];
                }
            });
    }

    function loadLogList(
        payload: { userid: string },
        user: Auth.User
    ) {
        const { userid } = payload;
            
        return fetch(`/api/logs/list/${userid}`, {
            headers: Auth.headers(user)
        })
            .then((response: Response) => {
                if(response.status === 200) {
                    return response.json();
                }
                return undefined;
            })
            .then((json: unknown) => {
                if (json) {
                    console.log("Log:", json);
                    return json as Log[];
                }
            });
    }

    function createLog(
        msg: {
            log: Log;
        }, 
        user: Auth.User
    ) {
        return fetch(`/api/logs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...Auth.headers(user)
            },
            body: JSON.stringify(msg.log)
        })
            .then((response: Response) => {
                if (response.status === 201 || response.status === 200)
                    return response.json();
                else throw new Error(`Failed to create log for ${msg.log.userID}`);
            })
            .then((json: unknown) => {
                if (json) return json as Log;
                return undefined;
            });
    }

    function updateLog(
        msg: {
            userid: string,
            logid: string;
            log: Log;
        },
        user: Auth.User
    ) {
        return fetch(`/api/logs/${msg.logid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...Auth.headers(user)
            },
            body: JSON.stringify(msg.log)
        })
            .then((response: Response) => {
                if (response.status === 200) return response.json();
                else 
                    throw new Error(
                        `Failed to save profile for ${msg.userid}`
                    );
            })
            .then((json: unknown) => {
                if (json) return json as Log;
                return undefined;
            });
    }

}