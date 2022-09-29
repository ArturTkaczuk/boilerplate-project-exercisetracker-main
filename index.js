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

app
  .route("/api/users")
  .post((req, res) => {
    const username = req.body.username;
    if (username.length === 0) {
      res.json({ error: "Username is required" });
    } else if (username.length > 20) {
      res.json({ error: "Username is too long (max 20 characters)" });
    }

    const newUser = {
      username,
      _id: makeid(),
    };

    users.push(newUser);
    res.json(newUser);
  })
  .get((req, res) => {
    res.send(users);
  });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
