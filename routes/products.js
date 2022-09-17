const express = require("express");
const router = express.Router();
const { Product } = require("../model/product");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/", (req, res) => {
  console.log(req.body.message);
  res.send(req.body.message);
});

router.get("/product", (req, res) => {
  const product = Product.find();
  res.json(products);
});

router.post("/product", async (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    detail: req.body.detail,
    image: req.body.image,
  });
  product = await product.save();
  res.send(product);
});

router.put("/product/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
      detail: req.body.detail,
      image: req.body.image,
    },

    { new: true }
  );
  res.send(product);
});

router.delete("/product/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Success");
});

module.exports = router;
