var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  goal: {
    type: Schema.Types.ObjectId,
    ref: "Goal"
  },
	gear: {
	  type: Schema.Types.ObjectId,
	  ref: "Gear"
  },
  experience: {
  	type: Number,
  	required: true,
  	default: 0
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;