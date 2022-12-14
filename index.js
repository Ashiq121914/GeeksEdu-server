const express = require("express");
const app = express();

// adding cors
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

// loading the data

const courses = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("course api running");
});

app.get("/category", (req, res) => {
  res.send(courses);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("geeksedu server running on port", port);
});
