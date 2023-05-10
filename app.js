import express from "express";
import { Sequelize, Model, DataTypes } from "sequelize";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const db = new Sequelize("example", "example_user", "example_password", {
  host: "localhost",
  dialect: "mariadb",
});

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const User = db.define("User", {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

await User.sync();

const jane = await User.create({
  username: "janedoe",
  birthday: new Date(1980, 6, 20),
});

const users = await User.findAll();

console.log(users.map(user => user.dataValues));
