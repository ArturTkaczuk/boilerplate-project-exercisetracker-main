const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const users = [
  {
    username: "fcc_test",
    _id: "5fb5853f734231456ccb3b05",
  },
];

const exercises = [
  {
    username: "fcc_test",
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
    _id: "5fb5853f734231456ccb3b05",
  },
];

app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
