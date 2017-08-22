var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GoalSchema = new Schema({
  goalTitle: {
  	type: String,
  	required: true
  },
  goalDue: {
  	type: Date
  },
  subtask: [{
  	title: {
	    type: String,
	    unique: true
    },
    completed: {
      type: Boolean,
      default: false
    }
		// subtaskDue: {
		// 	type: Date
		// }
  }]
});

var Goal = mongoose.model("Goal", GoalSchema);
module.exports = Goal;