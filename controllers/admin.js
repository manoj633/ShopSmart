const Product = require("../models/products");
const User = require("../models/user");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", { pageTitle: "Add product", edit: false });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const price = req.body.price;
  const id = req.user.id;
  req.user
    .createProduct({
      title: title,
      imageURL: imageURL,
      description: description,
      price: price,
    })
    .then(() => {
      res.redirect("/admin/");
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  } else {
    const prodId = req.params.productId;
    req.user
      .getProducts({ where: { id: prodId } })
      .then((product) => {
        res.render("admin/edit-product", {
          pageTitle: "Edit product",
          product: product[0],
          edit: editMode,
        });
      })
      .catch((err) => console.log(err));
  }
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const price = req.body.price;

  Product.findByPk(prodId)
    .then((product) => {
      product.title = title;
      product.imageURL = imageURL;
      product.description = description;
      product.price = price;
      return product.save();
    })
    .then(() => {
      console.log("Product updated");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Shop",
        path: "/index",
      });
    })
    .catch((err) => console.log(err));
};

exports.getDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.destroy({ where: { id: prodId } })
    .then(() => {
      console.log("Product deleted successfully");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
