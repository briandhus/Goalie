var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GoalSchema = new Schema({
  goal: {
    type: String,
    required: true
  },
  subtask: {
    type: String
  }
});

var Goal = mongoose.model("Goal", GoalSchema);
module.exports = Goal;