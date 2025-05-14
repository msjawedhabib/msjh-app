const express = require('express');
const router = express.Router();
const {
  submitBranch,
  checkIn,
  checkOut,
  submitBilling,
  submitLeave
} = require('../controllers/employeeController');

router.post('/branch', submitBranch);
router.post('/checkin', checkIn);
router.post('/checkout', checkOut);
router.post('/billing', submitBilling);
router.post('/leave', submitLeave);

module.exports = router;
