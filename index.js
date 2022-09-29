const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const makeid = require("./utils/makeid");

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
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/users", (req, res) => {
  const username = req.body.username;
  users.push({
    username,
    _id: makeid(),
  });

  console.log(username, users);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
