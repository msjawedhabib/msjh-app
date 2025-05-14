const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const users = [
  { id: "O001", name: "Souvik Chakraborty", username: "souvik", password: "owner123", role: "owner" },
  { id: "O002", name: "Mrityunjoy Chakraborty", username: "mrityunjoy", password: "owner123", role: "owner" },
  { id: "U001", name: "Goutam Shil", username: "goutam", password: "pass123", role: "employee", mobile: "6294673863" },
  // 👉 Add the rest of your users here
];

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/msjh-users');

  for (const userData of users) {
    const existing = await User.findOne({ username: userData.username });
    if (existing) continue;

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new User({ ...userData, password: hashedPassword });
    await user.save();
  }

  console.log('Users seeded.');
  mongoose.disconnect();
}

seed();
