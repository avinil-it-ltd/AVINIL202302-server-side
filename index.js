const express = require("express");
require("dotenv").config();
const router = require("./Routers/API");
const cors = require("cors");
const bodyParser = require("body-parser");

const { default: mongoose } = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iyjwjrz.mongodb.net/cms?retryWrites=true&w=majority;console.log(uri)`;
mongoose.connect(uri).catch((error) => console.log(error));

app.use(express.json());
app.use("/api/v1", router);
app.get("/", async (req, res) => {
  res.send("running");
});
app.set("port", 5000);
app.listen(port, () => {
  console.log("App Run On Port - " + port);
});
module.exports = app;
