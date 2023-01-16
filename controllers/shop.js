const Product = require("../models/products");
const Cart = require("../models/cart");

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/index",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProductsDetails = (req, res, next) => {
  const prodID = req.params.productID;
  Product.findById(prodID)
    .then((product) => {
      res.render("shop/product-detail", {
        prod: product,
        pageTitle: "Details",
        path: "/product",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your cart", path: "/cart" });
};

exports.postCart = (req, res, next) => {
  const prodID = req.body.productID;
  Product.findyId(prodID)
    .then((product) => {
      Cart.addProduct(product.id, product.price);
    })
    .catch((err) => console.log(err));
  res.redirect("/cart");
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.findAll((products) => {
      const cartProducts = [];

      for (let product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );

        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }

      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "your cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      Cart.deleteProduct(prodId, product.price);
      res.redirect("/shop/");
    })
    .catch((err) => console.log(err));
};
