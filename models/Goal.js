var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GoalSchema = new Schema({
  goalTitle: {
  	type: String,
  	required: true,
  },
  goalDue: {
  	type: Date
  },
  goalComplete: {
    type: Boolean,
    default: false
  },
  subtask: [{
    type: Schema.Types.ObjectId,
    ref: "Task"
  }]
});

var Goal = mongoose.model("Goal", GoalSchema);
module.exports = Goal;