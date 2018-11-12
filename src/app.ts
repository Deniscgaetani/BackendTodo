import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as errorHandler from "errorhandler";
import * as express from "express";
import {Server} from "http";
import * as logger from "morgan";
import * as homeController from "./controllers/home";
import TicketRoute from "./routes/ticket-route";

// Create Express server
const app = express();
// options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: ["Origin", "Authorization", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
// use cors middleware
app.use(cors(options));
// Express configuration
app.set("port", process.env.PORT || 8080);
app.use((err: any, req: any, res: any, next: any) => {
  req.headers.Accept = "json";
});
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(errorHandler());
app.use(bodyParser.urlencoded({extended: true}));
/**
 * Primary app routes.
 */
// app.post("/login", (req, res, next)=>{});
app.get("/", homeController.index);
app.use("/api/v1/ticket", TicketRoute);

// enable pre-flight
app.options("*", cors(options));
/**
 * Start Express server.
 */

const serverApplication: Server = app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});
export = serverApplication;
