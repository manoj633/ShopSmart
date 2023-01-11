const express = require("express");
const Product = require("../models/products");
const adminRoute = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { pageTitle: "Shop", prods: products });
  });
});

exports.routes = router;
