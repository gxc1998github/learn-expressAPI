// Add Express
const express = require("express");

//  Add books
const books = require("./api/books");

// Initialize Express
const app = express();
// Create GET request
app.get("/", (req, res) => {
  res.send("Express API on Vercel 🪐");
});

//  use the made api
app.use('/api/books', books);


// Initialize server
app.listen(3000, () => {
  console.log("Running on port 3000.");
});

// Export the Express API
module.exports = app;

