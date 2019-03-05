const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Main end point");
});
app.listen(8080, () => {
  console.log("server listening");
});
