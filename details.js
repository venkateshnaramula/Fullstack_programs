const express = require('express');
const app = express();

app.get('/', (req, res) => {

  // Read values from address bar
  const name = req.query.name;
  const age = req.query.age;

  res.send(`
    <h2>Name: ${name}</h2>
    <h2>Age: ${age}</h2>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
