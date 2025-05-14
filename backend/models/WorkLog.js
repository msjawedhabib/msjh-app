const mongoose = require('mongoose');

const workLogSchema = new mongoose.Schema({
  employeeId: String,
  branch: String,
  checkInTime: String,
  checkOutTime: String,
  clients: Number,
  services: String,
  products: String,
  leaveDates: String
});

module.exports = mongoose.model('WorkLog', workLogSchema);
