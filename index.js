const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

app.use(cors());

// 1
const allCourses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Prantik Education Running on Port");
});

// 1u
app.get("/all-courses-details", (req, res) => {
  res.send(allCourses);
});

app.listen(port, () => {
  console.log("Prantik Education Running on Port", port);
});
