const Exercise = require('./schemas/ExerciseSchema');
const { User } = require('./schemas/UserSchema');
const Categories = require('./schemas/CategoriesSchema');
const { ObjectId } = require('mongodb');

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
  if (_id.match(/[0-9]/g)) {
    return (
      User.find({ _id: _id })
        // This will return only username & will remove id from visablilty to user "-_id username"
        .then((result) => {
          if (result.length === 0) {
            res.status(404).send({ msg: 'Not Found' });
          } else res.status(200).send({ user: result[0] });
        })
    );
  } else
    return Promise.reject({
      status: 400,
      msg: 'Bad request: invalid _id type',
    }).catch(next);
};

const getExerciseById = (req, res, next) => {
  const { _id } = req.params;
  if (_id.match(/[0-9]/g)) {
    return Exercise.find({ _id: _id }).then((result) => {
      if (result.length === 0) {
        res.status(404).send({ msg: 'Not Found' });
      } else res.status(200).send({ exercise: result[0] });
    });
  } else
    return Promise.reject({
      status: 400,
      msg: 'Bad request: invalid _id type',
    }).catch(next);
};

module.exports = {
  getUsers,
  getExercises,
  getCategories,
  getExerciseById,
  getUserById,
};
