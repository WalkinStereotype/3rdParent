import { Schema, model } from "mongoose";
import { Skill } from "../models/skill";

import { Types } from "mongoose";

const SkillSchema = new Schema<Skill>(
    {
        _id: { type: String, trim: true },
        title: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        description: { type: String, trim: true },
        creatorID: { type: String, trim: true },
        resources: [{ type: {type: String}, label: String, url: String}]
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

function create(json: Skill): Promise<Skill> {
  const s = new SkillModel(json);
  return s.save();
}

function update(userid: string, skill: Skill): Promise<Skill> {
  console.log(skill);
  return SkillModel.findOneAndUpdate({ _id: new Types.ObjectId(userid) }, skill, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated as Skill;
  });
}

function remove(userid: String): Promise<void> {
  return SkillModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
  
export default { index, get, indexByCreator, create, update, remove };