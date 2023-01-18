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

exports.postCart = (req, res, next) => {
  const prodID = req.body.productID;
  let fetchedCart;

  let newQuantity = 1;
  req.user
    .getCart()
    .then((cart) => {
      console.log(cart);
      fetchedCart = cart;
      return fetchedCart.getProducts({ where: { id: prodID } });
    })
    .then((products) => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodID);
    })
    .then((product) => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity },
      });
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getCart = (req, res, next) => {
  req.user.getCart().then((cart) => {
    return cart
      .getProducts()
      .then((products) => {
        res.render("shop/cart", {
          path: "/cart",
          pageTitle: "your cart",
          products: products,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
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
