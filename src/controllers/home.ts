import {Request, Response} from "express";
import {OK} from "http-status-codes";
import {VersionEnv} from "../enum/version-env";

export let index = (req: Request, res: Response) => {
  res.status(OK);
  res.json({
    APP: VersionEnv.APP,
    ENDPOINT: VersionEnv.ENDPOINT,
    VERSION: VersionEnv.VERSION,
  });
};
