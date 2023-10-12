import { IGetUsersRepository } from "../../controllers/getUsers/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "AAAA",
        lastName: "BBBB",
        email: "CCCC",
        password: "DDDD",
      },
    ];
  }
}
