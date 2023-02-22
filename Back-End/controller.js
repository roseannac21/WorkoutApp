const Exercise = require("./schemas/ExerciseSchema");
const { User } = require("./schemas/UserSchema");
const Categories = require("./schemas/CategoriesSchema");
const { ObjectId } = require("mongodb");

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

const getUserById = (req, res, next) => {
  const { _id } = req.params;
  if (typeof _id != "number") {
    return User.find({ _id: _id })
      .then((result) => {
        res.status(200).send({ user: result[0] });
      })
      .catch(next);
  } else
    return Promise.reject({
      status: 400,
      msg: "Bad request: invalid _id type",
    });
};

module.exports = { getUsers, getExercises, getCategories, getUserById };
