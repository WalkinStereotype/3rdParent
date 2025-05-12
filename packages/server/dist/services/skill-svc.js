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
var skill_svc_exports = {};
__export(skill_svc_exports, {
  default: () => skill_svc_default
});
module.exports = __toCommonJS(skill_svc_exports);
var import_mongoose = require("mongoose");
const SkillSchema = new import_mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    creatorID: { type: String, trim: true }
  },
  { collection: "skills" }
);
const SkillModel = (0, import_mongoose.model)(
  "Skill",
  SkillSchema
);
function index() {
  return SkillModel.find();
}
function get(id) {
  return SkillModel.find({ _id: id }).then((list) => list[0]).catch((err) => {
    throw `${id} Not Found`;
  });
}
function indexByCreator(userID) {
  return SkillModel.find({
    $or: [
      { category: { $ne: "custom" } },
      { creatorID: userID }
    ]
  });
}
var skill_svc_default = { index, get, indexByCreator };
