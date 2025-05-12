"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var interests_exports = {};
__export(interests_exports, {
  default: () => interests_default
});
module.exports = __toCommonJS(interests_exports);
var import_express = __toESM(require("express"));
var import_interest_svc = __toESM(require("../services/interest-svc"));
const router = import_express.default.Router();
router.get("/", (_, res) => {
  import_interest_svc.default.index().then((data) => {
    if (data) res.set("Content-Type", "application/json").send(JSON.stringify(data));
    else res.status(404).send();
  });
});
router.get("/:userid", (req, res) => {
  const { userid } = req.params;
  import_interest_svc.default.get(userid).then((Interest2) => res.json(Interest2)).catch((err) => res.status(404).send(err));
});
router.post("/", (req, res) => {
  const newInterest = req.body;
  import_interest_svc.default.create(newInterest).then(
    (Interest2) => res.status(201).json(Interest2)
  ).catch((err) => res.status(500).send(err));
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newInterest = req.body;
  console.log(id);
  console.log(newInterest);
  import_interest_svc.default.update(id, newInterest).then((interest) => res.json(interest)).catch((err) => res.status(404).end());
});
router.delete("/:userid", (req, res) => {
  const { userid } = req.params;
  import_interest_svc.default.remove(userid).then(() => res.status(204).end()).catch((err) => res.status(404).send(err));
});
var interests_default = router;
