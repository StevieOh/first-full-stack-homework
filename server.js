const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const ejsLint = require('ejs-lint');

require('./db/db')

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

const libraryController = require('./controllers/libraryController');

//everything in the controller now stsrts with '/library'
app.use('/library', libraryController);


app.listen(3000, () => {
  console.log("i am listening on port 3000")
})