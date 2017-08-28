var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  refreshToken: {
    type: String,
    unique: true
  },
  accessToken: {
    type: String,
    unique: true
  },
  goal: {
    goalTitle: {
      type: String
    },
    goalDue: {
      type: Date
    },
    goalComplete: {
      type: Boolean,
      default: false
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
    // default: './assets/images/level-1.png'
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;