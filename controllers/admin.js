const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", { pageTitle: "Add product", edit: false });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    null,
    req.body.title,
    req.body.imageURL,
    req.body.description,
    req.body.price
  );
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  } else {
    const prodId = req.params.productId;
    Product.fetchById(prodId, (product) => {
      res.render("admin/edit-product", {
        pageTitle: "Edit product",
        product: product,
        edit: editMode,
      });
    });
  }
};

exports.postEditProduct = (req, res, next) => {
  const updatedProduct = new Product(
    req.body.productId,
    req.body.title,
    req.body.imageURL,
    req.body.description,
    req.body.price
  );
  updatedProduct.save();
  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Shop",
      path: "/index",
    });
  });
};
