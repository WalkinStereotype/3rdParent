import { Schema, model } from "mongoose";
import { Interest } from "../models/interest";

const InterestSchema = new Schema<Interest>(
    {
        id: { type: String, required: true, trim: true },
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
  
export default { index, get, indexByCreator };