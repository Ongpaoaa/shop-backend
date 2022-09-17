const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.mongo_url);

app.use(express.json());

const productRoute = require("./routes/products");

app.use("/", productRoute);

app.listen(3000, () => {
  console.log("server running at port 3000");
});
