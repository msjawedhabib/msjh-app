const express = require('express');
const router = express.Router();
const { submitReceptionBill } = require('../controllers/receptionController');

router.post('/billing', submitReceptionBill);

module.exports = router;
