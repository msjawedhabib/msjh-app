const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  shop: String,
  billNo: String,
  dateTime: String,
  service: String,
  servicePrice: Number,
  product: String,
  productPrice: Number,
  discount: Number,
  paymentType: String,
  grandTotal: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Billing', billingSchema);
