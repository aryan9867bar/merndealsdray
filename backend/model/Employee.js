const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobileNo: { type: Number, unique: true },
  designation: String,
  gender: String,
  course: [String],
  img: Buffer,
  createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);