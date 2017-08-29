var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  goal: {
    goalTitle: {
      type: String,
      default: ''
    },
    goalDue: {
      type: Date
    }
  },
  tasks: [{
    taskTitle: {
      type: String
    },
    taskComplete: {
      type: Boolean,
      default: false
    },
    taskDue: {
      type: Date
    }
  }],
	gearLevel: {
    type: Number,
    default: 1
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;