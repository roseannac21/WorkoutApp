const express = require("express");
const mongoose = require("mongoose");
const {
  getUsers,
  getExercises,
  getCategories,
  postUser,
} = require("./controller");

const app = express();

require("dotenv").config({
  path: `${__dirname}/.env`,
});

const url = process.env.DATABASE_URL;

console.log(url);

mongoose.connect(url);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.get("/api/users", getUsers);
app.get("/api/exercises", getExercises);
app.get("/api/categories", getCategories);
app.post("/api/users", postUser);

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "Bad Request" });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (err.code === "23502") {
    res.status(400).send({ msg: "Invalid Patch Request" });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal Server Error" });
});

app.listen(3000, () => {
  console.log("listening");
});

module.exports = { app, mongoose };
