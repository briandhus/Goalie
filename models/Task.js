var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  taskTitle: {
    type: String,
    required: true,
    unique: true
  },
  completed: {
    type: Boolean,
    default: false
  }
  // subtaskDue: {
  //  type: Date
  // }
});

var Task = mongoose.model("Task", TaskSchema);
module.exports = Task;