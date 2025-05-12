import { Schema, model } from "mongoose";
import { Log } from "../models/log";

const LogSchema = new Schema<Log>(
    {
        id: { type: String, required: true, trim: true },
        userID: { type: String, required: true, trim: true },
        skillID: { type: String, required: true, trim: true },
        reflection: { type: String, trim: true },
    },
    { collection: "logs" }
);

const LogModel = model<Log>(
    "Log",
    LogSchema
);

function index(): Promise<Log[]> {
    return LogModel.find();
}
  
function get(id: String): Promise<Log> {
    return LogModel.find({ id })
      .then((list) => list[0])
      .catch((err) => {
        throw `${id} Not Found`;
      });
}

function indexByCreator(userID: String): Promise<Log[]>{ 
    return LogModel.find({
        userID: userID
    })
}
  
export default { index, get, indexByCreator };