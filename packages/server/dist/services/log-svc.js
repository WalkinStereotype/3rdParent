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
var log_svc_exports = {};
__export(log_svc_exports, {
  default: () => log_svc_default
});
module.exports = __toCommonJS(log_svc_exports);
var import_mongoose = require("mongoose");
var import_mongoose2 = require("mongoose");
const LogSchema = new import_mongoose.Schema(
  {
    _id: { type: String, trim: true },
    userID: { type: String, required: true, trim: true },
    skillID: { type: String, required: true, trim: true },
    reflection: { type: String, trim: true }
  },
  { collection: "logs" }
);
const LogModel = (0, import_mongoose.model)(
  "Log",
  LogSchema
);
function index() {
  return LogModel.find();
}
function get(id) {
  return LogModel.find({ id }).then((list) => list[0]).catch((err) => {
    throw `${id} Not Found`;
  });
}
function indexByCreator(userID) {
  return LogModel.find({
    userID
  });
}
function create(json) {
  const l = new LogModel(json);
  return l.save();
}
function update(userid, log) {
  return LogModel.findOneAndUpdate({ _id: new import_mongoose2.Types.ObjectId(userid) }, log, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated;
  });
}
function remove(userid) {
  return LogModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
var log_svc_default = { index, get, indexByCreator, create, update, remove };
