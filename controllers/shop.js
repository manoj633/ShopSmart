const Product = require("../models/products");

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/index",
    });
  });
};

exports.getProductsDetails = (req, res, next) => {
  const prodID = req.params.productID;
  Product.fetchById(prodID, (product) => {
    res.render("shop/product-detail", {
      prod: product,
      pageTitle: "Details",
      path: "/index",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your cart", path: "/cart" });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};
