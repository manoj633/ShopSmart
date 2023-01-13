const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = new express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRoutes.routes);
app.use("/shop", shopRoutes.routes);

app.use("/", (erq, res, next) => {
  res.redirect("/shop/products");
});

app.listen(3000);
