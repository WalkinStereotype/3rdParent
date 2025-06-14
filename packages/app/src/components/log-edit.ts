import { define, Form, View, History } from "@calpoly/mustang";

import { html } from "lit";
import { property, state } from "lit/decorators.js";
// import reset from "../styles/reset.css.ts";
// import reflection from "../styles/reflection.css.ts";
// import skillColor from "../styles/skill-color.css.ts";

import { Log } from "server/models";
import { Msg } from "../messages.ts";
import { Model } from "../model.ts";

export class LogEditElement extends View<Model, Msg> {
    static uses = define({
        "mu-form": Form.Element,
    });

    @property()
    userid?: string;

    @property()
    logid?: string;

    @property()
    placeholder?: string = "New...";

    @state()
    get log(): Log | undefined {
        return this.model.editingLog;
    }

    handleSubmit(event: Form.SubmitEvent<Log>) {
        this.dispatchMessage([
            "log/update",
            {
                userid: this.userid ? this.userid : "",
                logid: this.logid ?  this.logid : "",
                log: event.detail,
                onSuccess: () =>
                    History.dispatch(this, "history/navigate", {
                        href: `/app/log/${this.userid}/${this.logid}`
                    }),
                onFailure: (error: Error) => 
                    console.log("ERROR:", error)
            }
        ]);
    };

    

    render() {
        return html`
            <main class="page">
                <mu-form
                    .init=${this.log}
                    @mu-form:submit=${this.handleSubmit}>

                    <input
                        type="text"
                        name="description"
                        placeholder=${this.placeholder}
                        required
                    />

                </mu-form>
            </main>
        `
    }
}