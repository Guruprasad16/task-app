import { Request, Response, Router } from "express";
import { userParams } from "./users.types";
import {
  createUserService,
  deleteUserService,
  findUserByIdService,
  findUsersService,
  updateUserService,
} from "./users.service";
import { IUser } from "../databases/mongodb/model/user.model";

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
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 */
controller.get("/", async (req: Request, res: Response) => {
  try {
    const users = await findUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.json(error);
  }
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
  try {
    const userId = req.params.userId;
    const user = await findUserByIdService(userId);
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: P@ssw0rd
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                 email:
 *                   type: string
 *                   description: The user's email
 */
controller.post("/", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await createUserService(username, password, email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

/**
 * @swagger
 * /api/users/{userId}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: P@ssw0rd
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                 email:
 *                   type: string
 *                   description: The user's email
 */
controller.put("/:userId", async (req: userRequest, res: Response) => {
  try {
    const userId = req.params.userId;
    const updateUser: IUser = req.body;
    const user = await updateUserService(userId, updateUser);
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
});

/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The deleted user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                 email:
 *                   type: string
 *                   description: The user's email
 */
controller.delete("/:userId", async (req: userRequest, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await deleteUserService(userId);
    res.send(user);
  } catch (error) {
    res.json(error);
  }
});

export default controller;
