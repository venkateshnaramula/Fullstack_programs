const http = require('http'); // Import the http module

const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set HTTP status code to OK
  res.setHeader('Content-Type', 'text/plain'); // Set the response header
  res.end('Hello, World!\n'); // Send the response body and end the response
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
