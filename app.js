const express = require("express");
const app = express();
const path = require("path");
const PORT = 5173;
const messages = require("./modules/data");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/views/newMessage", (req, res) => {
  res.render("newMessage", { messages: messages });
});

app.post("/submit", (req, res) => {
  const { name, text } = req.body;
  const newMessage = {
    user: name,
    text: text,
    added: new Date(), // Convert to Date object
  };
  messages.push(newMessage);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});
