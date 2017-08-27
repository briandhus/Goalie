var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GearSchema = new Schema({
  // base
  levelOne: {
    type: String,
    // check if this path leads to the correct path (static at public?)
    // required: true,
    default: './public/images/level1.png'
  },
  // rightArm
  levelTwo: {
    type: String,
    // required: true,
    default: './public/images/level2.png'
  },
  // leftArm
  levelThree: {
  	type: String,
    // required: true,
  	default: './public/images/level3.png'
  },
  // boots
  levelFour: {
  	type: String,
    // required: true,
  	default: './public/images/level4.png'
  },
  // armor
  levelFive: {
  	type: String,
    // required: true,
  	default: './public/images/level5.png'
  },
  // helmet / complete
  levelSix: {
  	type: String,
    // required: true,
  	default: './public/images/level6.png'
  }
});

var Gear = mongoose.model("Gear", GearSchema);
module.exports = Gear;