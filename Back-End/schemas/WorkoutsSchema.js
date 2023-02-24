const mongoose = require("mongoose");
const { AutoIncrement } = require("../connection");

const WorkoutSchema = new mongoose.Schema({
  exercise: { type: String, ref: "Exercise" },
  reps: { type: Number },
  duration: { type: String },
  weight: { type: String },
  sets: { type: Number },
});

const WorkoutsSchema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  user_id: { type: Number, ref: "User" },
  workout: [WorkoutSchema],
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema, "workouts");

module.exports = Workouts;
