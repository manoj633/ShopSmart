exports.getAddProduct = (req, res, next) => {
  res.render("admin", { pageTitle: "Add product" });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};
