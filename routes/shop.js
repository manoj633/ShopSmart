const express = require("express");
const Product = require("../models/products");

const shopController = require("../controllers/shop");
const adminRoute = require("./admin");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

exports.routes = router;
