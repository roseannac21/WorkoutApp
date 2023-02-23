const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Exercise = require("../../schemas/ExerciseSchema");
const User = require("../../schemas/UserSchema");
const Categories = require("../../schemas/CategoriesSchema");
const { exercises } = require("./test-exercises-data");
const { categories } = require("./categories-data");
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

user.save(function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("user inserted into users collection");
  }
});

Exercise.insertMany(exercises, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("multiple exercises inserted into exercise collection");
  }
});

Categories.insertMany(categories, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("multiple categories inserted into category collection");
  }
});
