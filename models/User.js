const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    tag: String,
    main: String,
    score: Number,
    timePlaying: String
})

const Users = mongoose.model('User', userSchema);

module.exports = Users;