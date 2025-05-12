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
var resource_svc_exports = {};
__export(resource_svc_exports, {
  default: () => resource_svc_default
});
module.exports = __toCommonJS(resource_svc_exports);
var import_mongoose = require("mongoose");
const ResourceSchema = new import_mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    skillID: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    label: { type: String, trim: true },
    url: { type: String, required: true, trim: true }
  },
  { collection: "resources" }
);
const ResourceModel = (0, import_mongoose.model)(
  "Resource",
  ResourceSchema
);
function index() {
  return ResourceModel.find();
}
function get(id) {
  return ResourceModel.find({ id }).then((list) => list[0]).catch((err) => {
    throw `${id} Not Found`;
  });
}
function getBySkill(skillID) {
  return ResourceModel.find({
    skillID
  });
}
var resource_svc_default = { index, get, getBySkill };
