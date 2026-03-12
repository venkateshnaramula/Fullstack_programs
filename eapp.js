// Import express
const express = require('express');

// Create express app
const app = express();

// Port number
const port = 3000;

// Route 1: Home page
app.get('/', (req, res) => {
  res.send('Welcome to Express.js');
});

// Route 2: About page
app.get('/about', (req, res) => {
  res.send('This is About Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
