// index.js

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (useful for Google verification, favicon, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/authroutes');
app.use('/auth', authRoutes); // All auth-related routes start with /auth

const receptionRoutes = require('./routes/receptionRoutes');
app.use('/api/reception', receptionRoutes); // All reception-related routes start with /api/reception

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Connect to MongoDB and start the server
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Atlas Connected');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1); // Exit process with failure
  }
}

startServer();
