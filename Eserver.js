const express = require('express'); // Import the express module
const app = express(); // Create an Express application instance
const PORT = 3000; // Define the port number

// Define a route for the root URL (/) that responds with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
