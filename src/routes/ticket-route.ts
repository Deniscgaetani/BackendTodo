import {Router} from "express";
import {INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
import { CustomError } from "../models/CustomError";
import { TicketModel } from "../models/index";

const TicketRoute: Router = Router();

TicketRoute.post("/", async (req, res) => {
  try {
    const result = await TicketModel.create(req.body);
    res.status(OK);
    res.json(result);
    console.log("aqui1");
  } catch (err) {
    console.log("aqui2");
    res.status(INTERNAL_SERVER_ERROR);
    res.json(CustomError.build(INTERNAL_SERVER_ERROR, "Erro ao inserir .", err));
  }
});

TicketRoute.get("/:id", async (req, res) => {
  try {
    const ticket = await TicketModel.findById(req.params.id);
    res.status(OK);
    res.json(ticket);

  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR);
    res.json(CustomError.build(INTERNAL_SERVER_ERROR, "Erro ao obter por id.", err));
  }
});

TicketRoute.put("/:id", async (req, res) => {
  try {
    const result = await TicketModel.findOneAndUpdate({
      _id: req.params.id,
    }, req.body);

    res.status(OK);
    res.json(result);

  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR);
    res.json(CustomError.build(INTERNAL_SERVER_ERROR, "Erro ao atualizar por id.", err));
  }
});

TicketRoute.delete("/:id", async (req, res) => {
  try {
    const result = await TicketModel.findByIdAndRemove({
      _id: req.params.id,
    });
    res.status(OK);
    res.json(result);

  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR);
    res.json(CustomError.build(INTERNAL_SERVER_ERROR, "Erro ao remover por id.", err));
  }
});

TicketRoute.get("/", async (req, res) => {

  const results = await TicketModel.find({});

  res.status(OK);
  res.json(results);

});

export default TicketRoute;
