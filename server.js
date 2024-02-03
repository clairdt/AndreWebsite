const express = require('express');
const app = express();
const path = require('path'); // Node.js module for working with file paths
const port = 6969; // Niiiiiiiiiiiice

// Middleware to set the Content-Type header for JavaScript files
app.use('/src', (req, res, next) => {
  res.type('text/javascript');
  next();
});


// Middleware for serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});