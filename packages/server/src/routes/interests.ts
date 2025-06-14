import express, { Request, Response } from "express";
import { Interest } from "../models/interest";

import Interests from "../services/interest-svc";
import { JwtPayload } from "jsonwebtoken";


const router = express.Router();

router.get("/", (_, res: Response) => {
    Interests.index().then((data) => {
        if (data) res 
            .set("Content-Type", "application/json")
            .send(JSON.stringify(data));
        else res 
            .status(404).send();
    })
});

  
// router.get("/:userid", (req: Request, res: Response) => {
//     const { userid } = req.params;
  
//     Interests.get(userid)
//       .then((Interest: Interest) => res.json(Interest))
//       .catch((err) => res.status(404).send(err));
// });

router.get("/:userid", (req: Request & {auth?: string | JwtPayload}, res: Response) => {
  const { userid } = req.params;
    console.log(req.auth);
  
    Interests.indexByCreator(userid).then((data) => {
        if (data) res 
            .set("Content-Type", "application/json")
            .send(JSON.stringify(data));
        else res 
            .status(404).send();
    })
});

router.post("/", (req: Request, res: Response) => {
  const newInterest = req.body;

  Interests.create(newInterest)
    .then((Interest: Interest) =>
      res.status(201).json(Interest)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const newInterest = req.body;

  console.log(id);
  console.log(newInterest);

  Interests.update(id, newInterest)
    .then((interest: Interest) => res.json(interest))
    .catch((err) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
 
  Interests.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;
