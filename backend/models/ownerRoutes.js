const express = require('express');
const router = express.Router();
const EmployeeInfo = require('../models/EmployeeInfo');
const EmployeeActivity = require('../models/employee'); // existing model
const LeaveRequest = require('../models/LeaveRequest');

// Search employee by name/username
router.get('/search', async (req, res) => {
  const query = req.query.q?.toLowerCase();
  if (!query) return res.status(400).json({ message: 'No query provided' });

  const employee = await EmployeeInfo.findOne({
    $or: [
      { name: { $regex: new RegExp('^' + query, 'i') } },
      { username: { $regex: new RegExp('^' + query, 'i') } }
    ]
  });

  if (!employee) return res.status(404).json({ message: 'Not found' });
  res.json(employee);
});

// Get all activity logs
router.get('/worklogs', async (req, res) => {
  const logs = await EmployeeActivity.find().sort({ createdAt: -1 });
  res.json(logs);
});

// Get leave requests
router.get('/leaves', async (req, res) => {
  const leaves = await LeaveRequest.find().sort({ appliedOn: -1 });
  res.json(leaves);
});

// Update leave status (Accept/Reject)
router.put('/leaves/:id', async (req, res) => {
  const { status } = req.body;
  const leave = await LeaveRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!leave) return res.status(404).json({ message: 'Not found' });
  res.json(leave);
});

module.exports = router;
