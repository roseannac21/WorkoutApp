const Exercise = require("./schemas/ExerciseSchema");
const { User } = require("./schemas/UserSchema");
const Categories = require("./schemas/CategoriesSchema");

const getUsers = (req, res, next) => {
  return User.find()
    .then((result) => {
      res.status(200).send({ users: result });
    })
    .catch(next);
};

const getExercises = (req, res, next) => {
  return Exercise.find()
    .then((result) => {
      res.status(200).send({ exercises: result });
    })
    .catch(next);
};

const getCategories = (req, res, next) => {
  return Categories.find()
    .then((result) => {
      res.status(200).send({ categories: result });
    })
    .catch(next);
};

const postUser = (req, res, next) => {
  return User.collection
    .insertOne({
      username: "user2",
      password: "helloWorld",
      avatar_url: "....",
    })
    .then((result) => {
      res.status(201).send({ user: result });
    })
    .catch(next);
};

module.exports = { getUsers, getExercises, getCategories, postUser };
