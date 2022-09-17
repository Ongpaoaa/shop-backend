const mongoose = require("mongoose");
const orderShema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  cart: {
    type: String,
  },
  total: {
    type: Number,
  },
});

exports.Order = mongoose.model("Order", orderShema);
