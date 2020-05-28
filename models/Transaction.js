const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'لطفا عنوان را وارد نمایید'],
  },
  amount: {
    type: Number,
    required: [true, 'لطفا مقدار را وارد نمایید'],
  },
  isIncome: {
    type: Boolean,
    required: [true, 'لطفا نوع درآمد یا هزینه خود را مشخص کنید'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
