"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var interest_svc_exports = {};
__export(interest_svc_exports, {
  default: () => interest_svc_default
});
module.exports = __toCommonJS(interest_svc_exports);
var import_mongoose = require("mongoose");
var import_mongoose2 = require("mongoose");
const InterestSchema = new import_mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    userID: { type: String, required: true, trim: true },
    skillID: { type: String, required: true, trim: true },
    priority: { type: Boolean, required: true }
  },
  { collection: "interests" }
);
const InterestModel = (0, import_mongoose.model)(
  "Interest",
  InterestSchema
);
function index() {
  return InterestModel.find();
}
function get(id) {
  return InterestModel.find({ id }).then((list) => list[0]).catch((err) => {
    throw `${id} Not Found`;
  });
}
function indexByCreator(userID) {
  return InterestModel.find({
    userID
  });
}
function create(json) {
  const i = new InterestModel(json);
  return i.save();
}
function update(userid, interest) {
  return InterestModel.findOneAndUpdate({ _id: new import_mongoose2.Types.ObjectId(userid) }, interest, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated;
  });
}
function remove(userid) {
  return InterestModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
var interest_svc_default = { index, get, indexByCreator, create, update, remove };
