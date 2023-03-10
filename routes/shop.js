const express = require("express");
const Product = require("../models/products");

const shopController = require("../controllers/shop");
const adminRoute = require("./admin");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products/:productID", shopController.getProductsDetails);

router.post("/cart", shopController.postCart);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);

router.post("/create-order", shopController.postOrder);

router.get("/order", shopController.getOrder);

exports.routes = router;
