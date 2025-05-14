const express = require('express');
const router = express.Router();
const WorkLog = require('../models/WorkLog');

router.get('/', async (req, res) => {
  const logs = await WorkLog.find();
  res.json(logs);
});

module.exports = router;
