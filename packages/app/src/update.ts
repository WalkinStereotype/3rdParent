import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";

import { Skill } from "server/models";

export default function update(
    message: Msg,
    apply: Update.ApplyMap<Model>,
    user: Auth.User
) {
    switch (message[0]) {
        case "skill/index":
            loadSkillList(message[1], user)
                .then((skills) =>
                    apply((model) =>
                        ({...model, skills})
                    )
                );
            break;
        default:
            throw new Error(`Unhandled Auth message`);
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
}