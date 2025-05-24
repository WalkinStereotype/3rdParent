import { Schema, model } from "mongoose";
import { Log } from "../models/log";

import { Types } from "mongoose";

const LogSchema = new Schema<Log>(
    {
        _id: { type: String, trim: true },
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

function create(json: Log): Promise<Log> {
  const l = new LogModel(json);
  return l.save();
}

function update(userid: string, log: Log): Promise<Log> {
  return LogModel.findOneAndUpdate({ _id: new Types.ObjectId(userid) }, log, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated as Log;
  });
}

function remove(userid: String): Promise<void> {
  return LogModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
  
export default { index, get, indexByCreator, create, update, remove };