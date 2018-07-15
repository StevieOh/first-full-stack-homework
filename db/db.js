const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/books');
mongoose.connection.on('connected', () => {
  console.log('mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected')
});