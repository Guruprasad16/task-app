import { Request, Response, Router } from "express";
import { userParams } from "./users.types";

const controller = Router();

type userRequest = Request<userParams>;

controller.get("/users", (req: Request, res: Response) => {});

controller.get("/users/:userId}", (req: userRequest, res: Response) => {
  const userId = req.params.userId;
});

controller.post("/users", (req: Request, res: Response) => {});

controller.put("/users/:userId", (req: userRequest, res: Response) => {});

controller.delete("/users/:userId", (req: userRequest, res: Response) => {});
