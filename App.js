const express = require("express");
const app = express();
const port = process.env.port || 5000;
const { engine } = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("hbs", engine());
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log(`the application start on ${port}`));
