const mongoose = require('mongoose');

// Connect to the Mongo DB
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gateway';

module.exports = () => {
  return mongoose
    .connect(DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then((db) => db.connection.on('error', (error) => console.log(`DB ERROR: ${error}`)));
};
