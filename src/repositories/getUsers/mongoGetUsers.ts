import { IGetUsersRepository } from "../../controllers/getUsers/protocols";
import { User } from "../../models/user";
import { MongoUser } from "../mongoProtocols";
import { MongoClient } from "./../../database/mongo";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<MongoUser>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
