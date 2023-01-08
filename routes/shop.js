const express = require("express");
const adminRoute = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { pageTitle: "Shop", prods: adminRoute.products });
});

exports.routes = router;
