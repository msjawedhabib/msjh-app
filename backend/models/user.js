const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // employee, owner, receptionist, etc.
});

module.exports = mongoose.model('User', userSchema);
