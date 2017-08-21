var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GearSchema = new Schema({
  // rightArm
  levelOne: {
    type: String,
    required: true,
    default: ''
  },
  // leftArm
  levelTwo: {
    type: String,
    required: true,
    default: ''
  },
  // rightLeg
  levelThree: {
  	type: String,
  	required: true,
  	default: ''
  },
  // leftLeg
  levelFour: {
  	type: String,
  	required: true,
  	default: ''
  },
  // torso
  levelFive: {
  	type: String,
  	required: true,
  	default: ''
  },
  // head / complete
  levelSix: {
  	type: String,
  	required: true,
  	default: ''
  }
});

var Gear = mongoose.model("Gear", GearSchema);
module.exports = Gear;