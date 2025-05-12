import { ObjectId } from "mongodb";
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Users from "./services/user-svc";
import Skills from "./services/skill-svc";
import Interests from "./services/interest-svc";
import Logs from "./services/log-svc";
import { User } from "./models/user";
import { Skill } from "./models/skill";
import { Interest } from "./models/interest";
import { Log } from "./models/log";
import skillsRouter from "./routes/skills";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("cluster0");

app.use(express.static(staticDir));

// Middleware
app.use(express.json());

app.use("/api/skills", skillsRouter);

// Start of routes
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*** USER ROUTES ***/

// get user
app.get("/users/:id", (req: Request, res: Response) => {
    const { id } = req.params;
  
    Users.get(id).then((data: User | null) => {
      if (data) res
        .set("Content-Type", "application/json")
        .send(JSON.stringify(data));
      else res
        .status(404).send();
    });
});


/*** SKILL ROUTES ***/

// get all skills
// app.get("/skill", (req: Request, res: Response) => {
//     Skills.index().then((data) => {
//         if (data) res 
//             .set("Content-Type", "application/json")
//             .send(JSON.stringify(data));
//         else res 
//             .status(404).send();
//     })
// });

// // get skill by id
// app.get("/skill/:id", (req: Request, res: Response) => {
//     const { id } = req.params;

//     Skills.get(id).then((data: Skill | null) => {
//         if (data) res
//             .set("Cotent-Type", "application/json")
//             .send(JSON.stringify(data));
//         else res
//             .status(404).send();
//     })
// });

// get skill list by creator id
app.get("/skill/personal/:userID"), (req: Request, res: Response) => {
    const { userID } = req.params;

    Skills.indexByCreator(userID).then((data) =>{
        if(data) res   
            .set("Content-Type", "application/json")
            .send(JSON.stringify(data));
        else res
            .status(404).send();
    })
}