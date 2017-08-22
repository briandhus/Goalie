var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GearSchema = new Schema({
  // base
  levelOne: {
    type: String,
    // check if this path leads to the correct path (static at public?)
    default: './public/images/level-1.png'
  },
  // rightArm
  levelTwo: {
    type: String,
    default: './public/images/level-2.png'
  },
  // leftArm
  levelThree: {
  	type: String,
  	default: './public/images/level-3.png'
  },
  // boots
  levelFour: {
  	type: String,
  	default: './public/images/level-4.png'
  },
  // armor
  levelFive: {
  	type: String,
  	default: './public/images/level-5.png'
  },
  // helmet / complete
  levelSix: {
  	type: String,
  	default: './public/images/level-6.png'
  }
});

var Gear = mongoose.model("Gear", GearSchema);
module.exports = Gear;