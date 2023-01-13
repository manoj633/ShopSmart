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

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products", {
      prods: products,
      pageTitle: "Shop",
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
