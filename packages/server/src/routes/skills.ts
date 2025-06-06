import express, { Request, Response } from "express";
import { Skill } from "../models/skill";

import Skills from "../services/skill-svc";


const router = express.Router();

router.get("/list", (_, res: Response) => {
    Skills.index().then((data) => {
        if (data) res 
            .set("Content-Type", "application/json")
            .send(JSON.stringify(data));
        else res 
            .status(404).send();
    })
});

router.get("/list/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  
    Skills.indexByCreator(userid).then((data) => {
        if (data) res 
            .set("Content-Type", "application/json")
            .send(JSON.stringify(data));
        else res 
            .status(404).send();
    })
});

//Get Skills, including the user's custom skills
router.get("/expand/:id", (req: Request, res: Response) => {
    const { id } = req.params;
  
    Skills.get(id)
      .then((skill: Skill) => res.json(skill))
      .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newSkill = req.body;

  Skills.create(newSkill)
    .then((Skill: Skill) =>
      res.status(201).json(Skill)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const newSkill = req.body;

  console.log(id);
  console.log(newSkill);

  Skills.update(id, newSkill)
    .then((skill: Skill) => res.json(skill))
    .catch((err) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
 
  Skills.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;
