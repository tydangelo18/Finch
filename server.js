// Require Dependencies
const express = require('express');
const connectionDB = require('./db/Connection');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const axios = require('axios');
require('dotenv').config();


// Initialize Express for app
const app = express();

//connectDB();
connectionDB();

// Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors());

// Passport Middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
// Any request that goes to api/users/ refer to the routes/api/users folder
app.use('/api/users', users);
// Any request that goes to api/tweets/ refer to the routes/api/tweets folder
app.use('/api/tweets', tweets);

// Serve Static Assets in Production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// When api/gettweets/ is requested, call Twitter API and send to the client
const key = process.env.KEY;
app.get('/api/gettweets', function (req, res) {
  const { searchVal } = req.query;

  axios
    .get(
      `https://api.twitter.com/2/tweets/search/recent?query=${searchVal}&tweet.fields=created_at,public_metrics&user.fields=profile_image_url,public_metrics,verified&expansions=author_id&max_results=24`,
      {
        headers: {
          Authorization: `Bearer ${key}`,
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
app.listen(PORT, () => console.log('Connected to server on ' + PORT));
