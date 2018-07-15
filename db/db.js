const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/food');
mongoose.connection.on('connected', () => {
  console.log('mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected')
});