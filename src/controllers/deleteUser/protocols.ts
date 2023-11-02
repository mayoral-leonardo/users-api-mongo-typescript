import { User } from "../../models/user";
import { HttpRequest } from "../protocols";
import { HttpResponse } from "./../protocols";

export interface IDeleteUserController {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<User>>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>;
}
