const Exercise = require("./schemas/ExerciseSchema");
const { User } = require("./schemas/UserSchema");
const Categories = require("./schemas/CategoriesSchema");

const getUsers = async (req, res, next) => {
  return await User.find()
    .then((result) => {
      res.status(200).send({ users: result });
    })
    .catch(next);
};

const getExercises = async (req, res, next) => {
  return await Exercise.find()
    .then((result) => {
      res.status(200).send({ exercises: result });
    })
    .catch(next);
};

const getCategories = async (req, res, next) => {
  return await Categories.find()
    .then((result) => {
      res.status(200).send({ categories: result });
    })
    .catch(next);
};

const postUser = async (req, res, next) => {
  return await User.collection
    .insertOne({
      _id: 2,
      username: "user2",
      password: "helloWorld",
      avatar_url: "....",
    })
    .then((result) => {
      console.log(result);
      res.status(201).send({ user: result });
    })
    .catch(next);
};

module.exports = { getUsers, getExercises, getCategories, postUser };
//
