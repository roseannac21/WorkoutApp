const Exercise = require('./schemas/ExerciseSchema');
const { User } = require('./schemas/UserSchema');

const getUsers = (req, res, next) => {
  return User.find()
    .then((result) => {
      //console.log(result, "<-- Result")
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

module.exports = { getUsers, getExercises };
