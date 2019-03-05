const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Book = require("./Book");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Book service");
});

app.post("/book", (req, res) => {
  const newBook = Book({
    title: req.body.title,
    author: req.body.author,
    numberPages: req.body.numberPages,
    publisher: req.body.publisher
  });
  newBook
    .save()
    .then(() => {
      res.json({ msg: "created" });
    })
    .catch(err => console.log(err));
});

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${
      process.env.PASSWORD
    }@cluster0-cjli2.mongodb.net/Microservice?retryWrites=true`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Book service running");
    });
  })
  .catch(err => console.log(err));
