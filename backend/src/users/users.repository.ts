import UserModel from "../databases/mongodb/schema/user.schema";

const userModel = new UserModel();

export async function findUsersRepository() {
  UserModel.find();
}

export async function findUserByIdRepository(id: unknown) {
  UserModel.findById(id);
}

export async function createUserRepository() {
  userModel.save();
}
