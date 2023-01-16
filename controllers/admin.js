const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", { pageTitle: "Add product", edit: false });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const price = req.body.price;
  Product.create({
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
    Product.findByPk(prodId)
      .then((product) => {
        res.render("admin/edit-product", {
          pageTitle: "Edit product",
          product: product,
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
  Product.findAll()
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
  Product.deleteById(prodId);
  res.redirect("/admin/products");
};
