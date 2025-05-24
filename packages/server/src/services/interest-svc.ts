import { Schema, model } from "mongoose";
import { Interest } from "../models/interest";

import { Types } from "mongoose";

const InterestSchema = new Schema<Interest>(
    {
        _id: { type: String, trim: true },
        userID: { type: String, required: true, trim: true },
        skillID: { type: String, required: true, trim: true },
        priority: { type: Boolean, required: true },
    },
    { collection: "interests" }
);

const InterestModel = model<Interest>(
    "Interest",
    InterestSchema
);

function index(): Promise<Interest[]> {
    return InterestModel.find();
}
  
function get(id: String): Promise<Interest> {
    return InterestModel.find({ id })
      .then((list) => list[0])
      .catch((err) => {
        throw `${id} Not Found`;
      });
}

function indexByCreator(userID: String): Promise<Interest[]>{ 
    return InterestModel.find({
        userID: userID
    })
}

function create(json: Interest): Promise<Interest> {
  const i = new InterestModel(json);
  return i.save();
}

function update(userid: string, interest: Interest): Promise<Interest> {
  return InterestModel.findOneAndUpdate({ _id: new Types.ObjectId(userid) }, interest, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated as Interest;
  });
}

function remove(userid: String): Promise<void> {
  return InterestModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
  
export default { index, get, indexByCreator, create, update, remove };