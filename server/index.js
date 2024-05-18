const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB
mongoose.connect(process.env.URI,)
  .then(() => {
    console.log('Database connected');
    // Start the Express server after successful database connection
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
