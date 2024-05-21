import { Express, Request, Response } from "express";
import userController from "../users/users.controller";

const routerSetup = async (app: Express) =>
  app

    .get("/api/status", (req: Request, res: Response) => {
      res.send("UP");
    })
    .use("/api/users", userController);

export default routerSetup;
