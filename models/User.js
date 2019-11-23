const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  tag: String,
  main: String,
  score: {
    type: Number,
    default: 1500
  },
  timePlaying: String
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
