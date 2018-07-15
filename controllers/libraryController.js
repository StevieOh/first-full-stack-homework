const express = require('express');
//set up the router
const router = express.Router();
const Library = require('../models/library');

//=====================
//THE INDEX ROUTE
//=====================
router.get('/', (req, res) => {
 Library.find({}, (err, fullLibrary) => {
   if(err){
    res.send(err);
   }else{
    res.render('index.ejs', {
      library: fullLibrary
    });
   }
 });
});




module.exports = router;