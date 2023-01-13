const express = require("express");
const productController = require("../controllers/shop");
const adminController = require("../controllers/admin");

const router = express.Router();

const products = [];

router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/products", adminController.getProducts);
exports.routes = router;
exports.products = products;
