const express = require("express");
const app = express();
const path = require("path");
const PORT = 5173;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
