import { ObjectId } from "mongodb";
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
// import Users from "./services/user-svc";
// import Skills from "./services/skill-svc";
// import Interests from "./services/interest-svc";
// import Logs from "./services/log-svc";
// import { User } from "./models/user";
// import { Skill } from "./models/skill";
// import { Interest } from "./models/interest";
// import { Log } from "./models/log";
import skills from "./routes/skills";
import interests from "./routes/interests";
import logs from "./routes/logs";
import auth, { authenticateUser } from "./routes/auth";

import fs from "node:fs/promises";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("cluster0");

app.use(express.static(staticDir));

// Middleware
app.use(express.json());

// Use routers
app.use("/auth", auth);
app.use("/api/skills", authenticateUser, skills);
app.use("/api/interests", authenticateUser, interests);
app.use("/api/logs", authenticateUser, logs);


app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  
  fs.readFile(indexHtml, { encoding: "utf8" })
  .then((html) => 
    res.send(html)
  );

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
