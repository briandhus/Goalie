var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  // goal: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Goal"
  // },
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
      type: String,
    },
    goalDue: {
      type: Date
    },
    goalComplete: {
      type: Boolean,
      default: false
    },
    subtask: [{
      taskTitle: {
        type: String,
        unique: true
      },
      completed: {
        type: Boolean,
        default: false
      }
      // subtaskDue: {
      //  type: Date
      // }
    }]
  },
	gear: {
	  type: String,
    default: './assets/images/level-1.png'
  },
  experience: {
  	type: Number,
  	required: true,
  	default: 0
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;