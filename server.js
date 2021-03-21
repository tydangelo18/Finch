// Require Dependencies
const express = require('express');
const config = require('config');
const api = config.get('KEY');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const tweets = require('./routes/api/tweets');
const axios = require('axios');
require('dotenv').config();

// Initialize App variable with express
const app = express();

// Connect Database
connectDB();

// Init Middleware Bodyparser
app.use(express.json({ extended: false }));

app.use(cors());

// Use Routes
// Any request that goes to api/tweets/ refer to the routes/api/tweets folder
app.use('/api/tweets', tweets);

// Serve Static Assets in Production for UI
// Check for Production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// When api/gettweets/ is requested, call Twitter API and send to the client
app.get('/api/gettweets', function (req, res) {
  const { searchVal } = req.query;

  axios
    .get(
      `https://api.twitter.com/2/tweets/search/recent?query=${searchVal}&tweet.fields=created_at,public_metrics&user.fields=profile_image_url,public_metrics,verified&expansions=author_id&max_results=24`,
      {
        headers: {
          Authorization: `Bearer ${api}`,
        },
      }
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Define the PORT (Server)
const PORT = process.env.PORT || 8000;

// Make sure app is listening
app.listen(PORT, () => console.log(`Connected to server on PORT: ${PORT}`));
