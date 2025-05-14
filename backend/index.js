// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Initialize environment variables
dotenv.config();

// Initialize the app
const app = express();

// Serve static files (for Google verification, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Routes
const authRoutes = require('./routes/authroutes');
app.use('/auth', authRoutes);

const receptionRoutes = require('./routes/receptionRoutes');
app.use('/api/reception', receptionRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
