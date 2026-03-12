const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Sita" }
];


// READ – Get all students
app.get("/students", (req, res) => {
  res.json(students);
});


// CREATE – Add new student
app.post("/students", (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name
  };
  students.push(student);
  res.json(student);
});


// UPDATE – Update student
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (student) {
    student.name = req.body.name;
    res.json(student);
  } else {
    res.send("Student not found");
  }
});


// DELETE – Remove student
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.send("Student deleted");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});