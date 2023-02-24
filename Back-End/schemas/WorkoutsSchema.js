const mongoose = require("mongoose");
const { AutoIncrement } = require("../connection");

// const ExerciseSchema = new mongoose.Schema({ exercise: { type: String } });
// const RepsSchema = new mongoose.Schema({ reps: { type: Number } });
// const DurationSchema = new mongoose.Schema({ duration: { type: String } });
// const WeightSchema = new mongoose.Schema({ WeightSchema: { type: String } });
// const SetsSchema = new mongoose.Schema({ sets: { type: Number } });
const WorkoutSchema = new mongoose.Schema({
  exercise: { type: String },
  reps: { type: Number },
  duration: { type: String },
  WeightSchema: { type: String },
  sets: { type: Number },
});

const WorkoutsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user_id: { type: Number, ref: "User" },
  workout: [WorkoutSchema],
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema, "workouts");

module.exports = Workouts;
