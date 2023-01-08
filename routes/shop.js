const express = require("express");
const Product = require("../models/products");
const adminRoute = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { pageTitle: "Shop", prods: Product.fetchAll() });
});

exports.routes = router;
