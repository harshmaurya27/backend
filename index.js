const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twiter", (req, res) => {
  res.send("harshmauryatwit");
});
app.get("/login", (req, res) => {
  res.send("<h1> Register</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
