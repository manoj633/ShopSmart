const express = require("express");
const productController = require("../controllers/products");

const router = express.Router();

const products = [];

router.get("/add-product", productController.getAddProduct);

router.post("/add-product", productController.postAddProduct);

exports.routes = router;
exports.products = products;
