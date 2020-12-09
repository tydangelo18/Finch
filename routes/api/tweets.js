// Require Dependencies
const express = require('express');
const router = express.Router();
// Bring in Tweet Model so the Route methods can reference
const Tweet = require('../../models/Tweet');

// Routes

// GET Route
// Tested with POSTMAN
router.get('/', (req, res) => {
  console.log('ROUTE HAS BEEN HIT');
  // Fetch all items from the DB
  Tweet.find()
    .sort({ date: -1 })
    .then((tweets) => res.json(tweets));
});

// POST Route
// Tested With POSTMAN
router.post('/saved', (req, res) => {
  console.log('Body', req.body);
  const data = req.body;
  const newTweet = new Tweet(data);

  newTweet.save((error) => {
    if (error) {
      return res.status(500).json({ msg: 'Sorry, internal server error!' });
    } else {
      res.json({
        msg: 'Your data has been saved!',
      });
    }
  });
});

// DELETE Route
// NEED TO TEST WITH POSTMAN
router.delete('/:id', (req, res) => {
  console.log(req.params.id);

  Tweet.find({ username: req.params.id })
    .then((tweet) =>
      Tweet.deleteOne({ username: req.params.id }).then(() =>
        res.json({ success: true })
      )
    )
    .catch((err) => console.log(err));
});

module.exports = router;
