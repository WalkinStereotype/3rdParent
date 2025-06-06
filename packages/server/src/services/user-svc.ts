import { Schema, model } from "mongoose";
import { User } from "../models/user";

import { Types } from "mongoose";

const UserSchema = new Schema<User>(
    {
        username: { type: String, required: true, trim: true },
        name: { type: String, trim: true }
    },
    { collection: "users" }
);

const UserModel = model<User>(
    "User",
    UserSchema
);

function index(): Promise<User[]> {
    return UserModel.find();
}
  
function get(id: String): Promise<User> {
    return UserModel.find({ id })
      .then((list) => list[0])
      .catch((err) => {
        throw `${id} Not Found`;
      });
}

function create(json: User): Promise<User> {
  const u = new UserModel(json);
  return u.save();
}

function update(id: string, user: User): Promise<User> {
  console.log(user);
  return UserModel.findOneAndUpdate({ _id: new Types.ObjectId(id) }, user, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${id} not updated`;
    else return updated as User;
  });
}

function remove(id: String): Promise<void> {
  return UserModel.findOneAndDelete({ id }).then(
    (deleted) => {
      if (!deleted) throw `${id} not deleted`;
    }
  );
}
  
export default { index, get, create, update, remove };