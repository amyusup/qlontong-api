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

