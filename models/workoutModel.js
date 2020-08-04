const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [{
      name: {
          type: String,
          trim: true,
          required: "Enter the name of the exercise"
      },
      type: {
          type: String,
          trim: true,
          required: "Enter the type of exercise"
      },
      weight: {
          type: Number,
          trim: true,
          required: "Enter the amount of weight used"
      },
      sets: {
          type: Number,
          trim: true,
          required: "Enter amount of sets completed"
      },
      reps: {
          type: Number,
          trim: true,
          required: "Enter amount of reps completed"
      },
      duration: {
          type: Number,
          trim: true,
          required: "Enter the duration of the exercise in minutes"
      }
      
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;