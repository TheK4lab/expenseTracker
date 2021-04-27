const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a value"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Transaction",
  TransactionSchema,
  "Transactions"
);
