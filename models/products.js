const rootDir = require("../util/path");
const Cart = require("./cart");
const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO PRODUCTS (title,price,description,imageURL) VALUES (?,?,?,?) ",
      [this.title, this.price, this.description, this.imageURL]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM PRODUCTS");
  }

  static fetchById(id) {}

  static deleteById(id) {}
};
