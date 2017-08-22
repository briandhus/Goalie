// import mongoose from 'mongoose';
import {Schema} from 'mongoose';

// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

var GoalSchema = new Schema({
  goal: {
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
		subtaskDue: {
			type: Date
		}
  }]
});

var Goal = mongoose.model("Goal", GoalSchema);
module.exports = Goal;