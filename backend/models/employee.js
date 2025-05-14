const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  branch: String,
  loginTime: String,
  logoutTime: String,
  customerName: String,
  serviceName: String,
  servicePrice: String,
  productName: String,
  productPrice: String,
  leave: {
    applicationDate: String,
    leaveType: [String],
    leaveFrom: String,
    leaveTo: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('EmployeeActivity', employeeSchema);
