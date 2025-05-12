import { Schema, model } from "mongoose";
import { User } from "../models/user";

const UserSchema = new Schema<User>(
    {
        id: { type: String, required: true, trim: true },
        username: { type: String, required: true, trim: true },
        name: { type: String, trim: true },
        hashedPW: { type: String, required: true, trim: true }
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
  
export default { index, get };