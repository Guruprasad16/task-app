import { Express, Request, Response } from "express";

const routerSetup = async (app: Express) =>
  app.get("/status", (req: Request, res: Response) => {
    res.send("UP");
  });

export default routerSetup;
