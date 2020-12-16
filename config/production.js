require('dotenv').config();

const uri = process.env.URI;
module.exports = {
  mongoURI: `${uri}`,
  secretOrKey: 'secret',
};
