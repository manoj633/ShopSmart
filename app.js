const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const sequelize = require("./util/database");

const app = new express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRoutes.routes);
app.use("/shop", shopRoutes.routes);

app.use("/", (req, res, next) => {
  res.redirect("/shop/");
});

sequelize.sync();

app.listen(3000);
