const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);
