require("dotenv").config();
const bodyParser = require("body-parser");

let express = require("express");
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get(
  "/now",
  function (req, res, next) {
    console.log("This is a middleware!");
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/json", function (req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

app.route("/name").post(function (req, res) {
  const { first, last } = req.body;
  res.json({ name: `${first} ${last}` });
});

app.get("/:word/echo", function (req, res) {
  const word = req.params.word;

  res.json({ echo: word });
});

module.exports = app;
