import { findUsersRepository, createUserRepository } from "./users.repository";
import bcrypt from "bcrypt";

export function findUsersService() {}

export async function createUserService(
  username: string,
  password: string,
  email: string
) {
  const hashedPwd = await bcrypt.hash(password, 12);

  const user = await createUserRepository(username, hashedPwd, email);

  return user;
}
