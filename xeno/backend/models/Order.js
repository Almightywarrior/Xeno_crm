const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
});

module.exports = mongoose.model('Order', OrderSchema);
