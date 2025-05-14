const mongoose = require('mongoose');

const receptionBillingSchema = new mongoose.Schema({
  shop: String,
  billNo: String,
  dateTime: String,
  service: String,
  servicePrice: String,
  product: String,
  productPrice: String,
  discount: String,
  paymentType: String,
  grandTotal: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ReceptionBilling', receptionBillingSchema);
