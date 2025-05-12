import { Schema, model } from "mongoose";
import { Skill } from "../models/skill";

const SkillSchema = new Schema<Skill>(
    {
        id: { type: String, required: true, trim: true },
        title: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        description: { type: String, trim: true },
        creatorID: { type: String, trim: true }
    },
    { collection: "skills" }
);

const SkillModel = model<Skill>(
    "Skill",
    SkillSchema
);

function index(): Promise<Skill[]> {
    return SkillModel.find();
}
  
function get(id: String): Promise<Skill> {
    return SkillModel.find({ _id: id })
      .then((list) => list[0])
      .catch((err) => {
        throw `${id} Not Found`;
      });
}

function indexByCreator(userID: String): Promise<Skill[]>{ 
    return SkillModel.find({
        $or: [
            { category: {$ne: "custom" } },
            { creatorID: userID}
        ]
    })
}
  
export default { index, get, indexByCreator };