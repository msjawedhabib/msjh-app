const express = require('express');
const router = express.Router();
const LeaveRequest = require('../models/LeaveRequest');

// Get all leave requests
router.get('/', async (req, res) => {
  const requests = await LeaveRequest.find();
  res.json(requests);
});

// Update leave status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const leave = await LeaveRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!leave) return res.status(404).json({ message: 'Leave not found' });
  res.json(leave);
});

module.exports = router;
