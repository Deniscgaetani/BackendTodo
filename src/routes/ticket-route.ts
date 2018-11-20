import * as errorHandler from "errorhandler";
import { Router } from "express";
import { Server } from "http";
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR,
   OK, SERVICE_UNAVAILABLE, UNPROCESSABLE_ENTITY } from "http-status-codes";
import { TicketModel } from "../models/index";
const TicketRoute: Router = Router();
TicketRoute.post("/", async (req, res, next) => {
  try {
    const result = await TicketModel.create(req.body);
    res.status(CREATED).json(result);
  } catch (err) {
    res.status(UNPROCESSABLE_ENTITY).json(err);
    next(err);
  }
});
TicketRoute.get("/:id", async (req, res, next) => {
  try {
    if (req.params.id === "U001") { // just to demo
      return res.json("user U001 found");
  }
    const result = await TicketModel.findById(req.params.id);
    res.status(OK).json(result);
  } catch (err) {
    res.status(UNPROCESSABLE_ENTITY).json(err);
    next(err);
  }
});
TicketRoute.get("/", async (req, res, next) => {
  try {
    const results = await TicketModel.find({});
    res.status(OK).json(results);
  } catch (err) {
    res.status(UNPROCESSABLE_ENTITY).json(err);
    next(err);
  }
});
TicketRoute.put("/:id", async (req, res, next) => {
  try {
    const result = await TicketModel.findOneAndUpdate({
      _id: req.params.id,
    }, req.body);
    res.status(OK).json(result);
  } catch (err) {
    res.status(UNPROCESSABLE_ENTITY).json(err);
    next(err);
  }
});
TicketRoute.delete("/:id", async (req, res, next) => {
  try {
    const result = await TicketModel.findByIdAndRemove({
      _id: req.params.id,
    });
    res.status(OK).json(result);
  } catch (err) {
    res.status(UNPROCESSABLE_ENTITY).json(err);
    next(err);
  }
});
export default TicketRoute;
