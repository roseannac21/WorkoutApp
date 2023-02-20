const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Exercise = require("../schemas/ExerciseSchema");
const User = require("../schemas/UserSchema");
const exercises = require("./exercises-data");
require("dotenv").config({
  path: `${__dirname}/../.env`,
});

const url = process.env.DATABASE_URL;

mongoose.connect(url);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const user = new User({
  username: "user1",
  password: "PassWord!",
  avatar_url: "...",
});

user.save(function (err, cb) {
  if (err) {
    console.log(err);
  } else {
    console.log("user inserted into users collection");
  }
});

Exercise.collection.insert(exercises, function (err, cb) {
  if (err) {
    console.log(err);
  } else {
    console.log("multiple exercises inserted into exercise collection");
  }
});
