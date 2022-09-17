const express = require("express");
const mongoose = require("mongoose");
const productShema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  detail: {
    type: String,
  },
  image: {
    type: String,
  },
});

exports.Product = mongoose.model("Product", productShema);
