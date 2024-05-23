import { Request, Response, Router } from "express";
import { userParams } from "./users.types";
import {
  createUserService,
  findUserByIdService,
  findUsersService,
} from "./users.service";

const controller = Router();

type userRequest = Request<userParams>;

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
controller.get("/", async (req: Request, res: Response) => {
  const users = await findUsersService();
  res.json(users);
});

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Retrieve a user by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *       404:
 *         description: User not found
 */
controller.get("/:userId", async (req: userRequest, res: Response) => {
  const userId = req.params.userId;
  const user = await findUserByIdService(userId);
  res.json(user);
});

controller.post("/", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await createUserService(username, password, email);
  res.send(user);
});

controller.put("/:userId", (req: userRequest, res: Response) => {});

controller.delete("/:userId", (req: userRequest, res: Response) => {});

export default controller;
