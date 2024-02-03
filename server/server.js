const express = require('express');
const app = express();
const path = require('path'); // Node.js module for working with file paths
const port = 6969; // using port 


// Middleware for serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
