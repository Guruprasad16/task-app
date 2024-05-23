import {
  findUsersRepository,
  createUserRepository,
  findUserByIdRepository,
} from "./users.repository";
import bcrypt from "bcrypt";

export async function findUsersService() {
  return await findUsersRepository();
}

export async function findUserByIdService(id: string) {
  return await findUserByIdRepository(id);
}

export async function createUserService(
  username: string,
  password: string,
  email: string
) {
  const hashedPwd = await bcrypt.hash(password, 12);

  const user = await createUserRepository(username, hashedPwd, email);

  return user;
}
