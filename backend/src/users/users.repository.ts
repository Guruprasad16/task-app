import UserModel from "../databases/mongodb/schema/user.schema";

export async function findUsersRepository() {
  UserModel.find();
}

export async function findUserByIdRepository(id: unknown) {
  UserModel.findById(id);
}

export async function createUserRepository(
  username: string,
  hashedPwd: string,
  email: string
) {
  const newUser = new UserModel();

  newUser.username = username;
  newUser.password = hashedPwd;
  newUser.email = email;

  const user = await newUser.save();
  return user;
}
