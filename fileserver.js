// Import the built-in http module
const http = require('http'); 

// Define host and port
const hostname = '127.0.0.1'; // 'localhost' works too
const port = 3000;

// Create the server instance with a request listener function
const server = http.createServer((req, res) => {
  // Set the response status code and header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/Html'); 
  // Send the response body and end the connection
  res.end('<html>
              <head>
                   <title>Page Title</title>
              </head>
             <body>
                <h1>This is a Heading</h1>
                <p>This is a paragraph.</p>
            </body>
            </html>'); 
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

