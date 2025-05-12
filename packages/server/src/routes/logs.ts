import express, { Request, Response } from "express";
import { Log } from "../models/log";

import Logs from "../services/log-svc";


const router = express.Router();

router.get("/", (_, res: Response) => {
    Logs.index().then((data) => {
        if (data) res 
            .set("Content-Type", "application/json")
            .send(JSON.stringify(data));
        else res 
            .status(404).send();
    })
});

  
router.get("/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
  
    Logs.get(userid)
      .then((Log: Log) => res.json(Log))
      .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newLog = req.body;

  Logs.create(newLog)
    .then((Log: Log) =>
      res.status(201).json(Log)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const newLog = req.body;

  console.log(id);
  console.log(newLog);

  Logs.update(id, newLog)
    .then((log: Log) => res.json(log))
    .catch((err) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
 
  Logs.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;
