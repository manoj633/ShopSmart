// const rootDir = require("../util/path");
// const Cart = require("./cart");
// const db = require("../util/database");

// module.exports = class Product {
//   constructor(id, title, imageURL, description, price) {
//     this.title = title;
//     this.imageURL = imageURL;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO PRODUCTS (title,price,description,imageURL) VALUES (?,?,?,?) ",
//       [this.title, this.price, this.description, this.imageURL]
//     );
//   }

//   static fetchAll() {
//     return db.execute("SELECT * FROM PRODUCTS");
//   }

//   static fetchById(id) {
//     return db.execute("SELECT * FROM PRODUCTS WHERE PRODUCTS.id=?", [id]);
//   }

//   static deleteById(id) {}
// };

const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
