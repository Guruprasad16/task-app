import { Request, Response, Router } from "express";
import { userParams } from "./users.types";
import { createUserService } from "./users.service";

const controller = Router();

type userRequest = Request<userParams>;

controller.get("/", (req: Request, res: Response) => {});

controller.get("/:userId}", (req: userRequest, res: Response) => {
  const userId = req.params.userId;
});

controller.post("/", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await createUserService(username, password, email);
  res.send(user);
});

controller.put("/:userId", (req: userRequest, res: Response) => {});

controller.delete("/:userId", (req: userRequest, res: Response) => {});

export default controller;
