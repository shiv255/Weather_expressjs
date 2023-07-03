const express = require("express");
const app = express();
const path = require("path");
var hbs = require("hbs");
const port = process.env.PORT || 3000;

//Static file path
const static_path = path.join(__dirname, "./public");

//Partials file path
const pathName = path.join(__dirname, "./templates/partials");
const template_path = path.join(__dirname, "./templates/views");

//Template engine
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(pathName);

app.use(express.static(static_path));

//routing
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("error", {
    errMsg: "Oops!Page not found",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
