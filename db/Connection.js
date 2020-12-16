const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.URI;

const URI = `${uri}`;
const connectionDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('DB has been connected!');
};

module.exports = connectionDB;
