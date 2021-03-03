const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const routeNavigator = require("./src");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use("*", cors());
app.get("/", (req, res) => {
  res.send("server online.");
});
app.use(express.static('public'));
// app.use('/images', express.static(__dirname + '/public'));

app.use("/api/v1", routeNavigator)

app.listen( process.env.PORT || 8000, () => {
  console.log(`Server running on PORT ${ process.env.PORT || 8000 }`);
});

// PORT=8000
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=
// DB_NAME=qlontong
// SECRET_KEY=d82c36f7c4f1f7eb30fa5bca9d17c772