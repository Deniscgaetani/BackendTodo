import * as mongoose from "mongoose";
import {Ticket} from "./ticket";
// Connect to MongoDB

const mongoUrl = process.env["'MONGO_URL'"] || "mongodb://127.0.0.1:27017/ticket";
console.log("Conectando a mongoDB em: " + mongoUrl);

mongoose.connect(mongoUrl);
mongoose.set("debug", true);

// Add todos os modelos e depois exportar por aqui
const TicketModel = new Ticket().getModelForClass(Ticket);
export {
  TicketModel,
};
