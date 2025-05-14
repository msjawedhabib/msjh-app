const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  name: String,
  appliedOn: String,
  leaveFrom: String,
  leaveTo: String,
  reason: String,
  status: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
