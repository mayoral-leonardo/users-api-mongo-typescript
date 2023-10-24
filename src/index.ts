import express from "express";
import { config } from "dotenv";
import { MongoGetUsersRepository } from "./repositories/getUsers/mongoGetUsers";
import { GetUsersController } from "./controllers/getUsers/getUsers";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/createUser/mongoCreateUser";
import { CreateUserController } from "./controllers/createUser/createUser";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();

    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();

    res.status(statusCode).send(body);
  });

  app.post("/users", async (req, res) => {
    const mongoCreateUserRepository = new MongoCreateUserRepository();

    const createUserController = new CreateUserController(
      mongoCreateUserRepository
    );

    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`Listening on port ${port}!`));
};

main();
