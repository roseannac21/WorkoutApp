const Exercise = require("./schemas/ExerciseSchema");
const User = require("./schemas/UserSchema");
const Categories = require("./schemas/CategoriesSchema");
const Workouts = require("./schemas/WorkoutsSchema");
const { app } = require("./app");
const { workouts } = require("./data/test-data/test-workouts-data");
// const { ObjectId } = require("mongodb");

const getUsers = (req, res, next) => {
  return User.find()
    .then((result) => {
      res.status(200).send({ users: result });
    })
    .catch(next);
};

const getExercises = (req, res, next) => {
  if (
    req.query.muscle === undefined &&
    req.query.difficulty === undefined &&
    req.query.category === undefined
  ) {
    return Exercise.find()
      .then((result) => {
        res.status(200).send({ exercises: result });
      })
      .catch(next);
  } else if (
    req.query.muscle &&
    ![
      "biceps",
      "triceps",
      "abdominals",
      "hamstrings",
      "glutes",
      "quadriceps",
      "lower_back",
      "middle_back",
      "chest",
      "traps",
      "calves",
    ].includes(req.query.muscle)
  ) {
    return res
      .status(400)
      .send({ msg: "this muscle does not exist on the database" });
  } else if (
    req.query.difficulty &&
    !["beginner", "intermediate", "advanced"].includes(req.query.difficulty)
  ) {
    return res
      .status(400)
      .send({ msg: "this difficulty level does not exist on the database" });
  } else if (
    req.query.category &&
    !["strength", "stretching", "cardio"].includes(req.query.category)
  ) {
    return res
      .status(400)
      .send({ msg: "this category does not exist on the database" });
  } else if (req.query.muscle) {
    const query = req.query.muscle;
    return Exercise.find({ muscle: query })
      .then((result) => {
        res.status(200).send({ exercises: result });
      })
      .catch(next);
  } else if (req.query.difficulty) {
    const query = req.query.difficulty;
    return Exercise.find({ difficulty: query })
      .then((result) => {
        res.status(200).send({ exercises: result });
      })
      .catch(next);
  } else if (req.query.category) {
    const query = req.query.category;
    return Exercise.find({ category: query })
      .then((result) => {
        res.status(200).send({ exercises: result });
      })
      .catch(next);
  }
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
    return User.find({})
      .then((returnedUsers) => {
        const correctUser = [];
        returnedUsers.forEach((user) => {
          if (user._id == _id) {
            correctUser.push(user);
          }
        });
        return correctUser;
      })
      .then((correctUser) => {
        if (correctUser.length === 0) {
          res.status(404).send({ msg: "Not Found" });
        } else res.status(200).send({ user: correctUser[0] });
      });
  } else
    return Promise.reject({
      status: 400,
      msg: "Bad request: invalid _id type",
    }).catch(next);
};

const getExerciseById = (req, res, next) => {
  const { _id } = req.params;
  if (_id.match(/[0-9]/g)) {
    return Exercise.find({ _id: _id }).then((result) => {
      if (result.length === 0) {
        res.status(404).send({ msg: "Not Found" });
      } else res.status(200).send({ exercise: result[0] });
    });
  } else
    return Promise.reject({
      status: 400,
      msg: "Bad request: invalid _id type",
    }).catch(next);
};

const deleteUserById = (req, res, next) => {
  const _id = req.params.user_id;
  if (_id.match(/[0-9]/g)) {
    return User.deleteOne({ _id: _id }).then((result) => {
      if (result.deletedCount === 0) {
        res.status(404).send({ msg: "Not Found" });
      } else {
        res.status(204).send();
      }
    });
  } else {
    res.status(400).send({ msg: "Invalid ID type" });
  }
};

const postUser = (req, res, next) => {
  const { username, password, avatar_url } = req.body;
  if (username.length < 4) {
    return res
      .status(400)
      .send({ msg: "username must be 4 or more characters" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .send({ msg: "password must be 6 or more characters" });
  } else {
    const newUser = new User({
      username: username,
      password: password,
      avatar_url: avatar_url,
    });
    return newUser
      .save()
      .then((result) => {
        res.status(201).send({
          userAdded: newUser,
        });
      })
      .catch(next);
  }
};

const patchUser = (req, res, next) => {
  const userId = req.params._id;
  if (isNaN(parseInt(userId)) === true) {
    return res.status(400).send({ msg: "Invalid ID type" });
  }
  return User.findOneAndUpdate(
    { _id: userId },
    { avatar_url: req.body.avatar_url },
    { new: true }
  ).then((result) => {
    if (result === null) {
      res.status(404).send({ msg: "User ID doesn't exist" });
    } else {
      res.status(200).send({ updated: result });
    }
  });
};

const getWorkouts = (req, res, next) => {
  const { _id } = req.params;
  if (_id.match(/[0-9]/g)) {
    return Workouts.find({ user_id: _id })
      .populate({ path: "user_id", select: "_id username" })
      .then((response) => {
        if (response.length === 0) {
          return res.status(404).send({ msg: "Bad request: ID doesn't exist" });
        }
        res.status(200).send({ workouts: response[0] });
      });
  } else
    return Promise.reject({
      status: 400,
      msg: "Bad request: invalid _id type",
    }).catch(next);
};

const getWorkoutById = (req, res, next) => {
  const { user_id, workout_id } = req.params;
  if (user_id.match(/[0-9]/g) && workout_id.match(/[0-9]/g)) {
    return Workouts.find({ user_id: user_id })
      .populate({ path: "user_id", select: "_id username" })
      .then((workoutsRes) => {
        if (workoutsRes.length === 0) {
          return res
            .status(404)
            .send({ msg: "Bad request: user ID doesn't exist" });
        } else {
          const correctWorkout = workoutsRes.filter((singleWorkout) => {
            return singleWorkout._id == workout_id;
          });
          return correctWorkout;
        }
      })
      .then((result) => {
        if (result.length === 0) {
          return res
            .status(404)
            .send({ msg: "Bad request: workout ID doesn't exist" });
        } else if (Array.isArray(result)) {
          res.status(200).send({ workout: result[0] });
        }
      });
  } else if (!user_id.match(/[0-9]/g)) {
    return Promise.reject({
      status: 400,
      msg: "Bad request: invalid user id type",
    }).catch(next);
  } else if (!workout_id.match(/[0-9]/g)) {
    return Promise.reject({
      status: 400,
      msg: "Bad request: invalid workout id type",
    }).catch(next);
  }
};

module.exports = {
  getUsers,
  getExercises,
  getCategories,
  getUserById,
  getExerciseById,
  deleteUserById,
  postUser,
  deleteUserById,
  patchUser,
  getWorkouts,
  getWorkoutById,
};
