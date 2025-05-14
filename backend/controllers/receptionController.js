// controllers/receptionController.js
const ReceptionBill = require('../models/ReceptionBill'); // Make sure the model exists

const submitReceptionBill = async (req, res) => {
  try {
    const billData = req.body;
    const newBill = new ReceptionBill(billData);
    await newBill.save();
    res.status(201).json({ message: "Bill submitted successfully!" });
  } catch (error) {
    console.error("Error saving bill:", error);
    res.status(500).json({ message: "Error submitting bill" });
  }
};

module.exports = { submitReceptionBill };
