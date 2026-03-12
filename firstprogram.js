const express = require("express");
const app = express();
const port = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Hello! This is my first Express.js program.");
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});