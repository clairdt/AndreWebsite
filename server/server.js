const express = require('express');
const app = express();
const port = 6969; // using port 

// Middleware (optional)
app.use(express.json()); // Example middleware for JSON parsing

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
