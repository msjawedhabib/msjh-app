const mongoose = require('mongoose');

const employeeInfoSchema = new mongoose.Schema({
  id: String,
  name: String,
  username: String,
  mobile: String,
  role: String
});

module.exports = mongoose.model('EmployeeInfo', employeeInfoSchema);
