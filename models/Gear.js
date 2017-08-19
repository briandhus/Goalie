var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GearSchema = new Schema({
  rightArm: {
    type: String,
    required: true,
    default: ''
  },
  leftArm: {
    type: String,
    required: true,
    default: ''
  },
  rightLeg: {
  	type: String,
  	required: true,
  	default: ''
  },
  leftLeg: {
  	type: String,
  	required: true,
  	default: ''
  },
  torso: {
  	type: String,
  	required: true,
  	default: ''
  },
  head: {
  	type: String,
  	required: true,
  	default: ''
  }
});

var Gear = mongoose.model("Gear", GearSchema);
module.exports = Gear;