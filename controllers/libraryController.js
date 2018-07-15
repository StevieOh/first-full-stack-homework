const express = require('express');

//set up the router
const router = express.Router();
const Library = require('../models/library');

//=====================
//THE INDEX ROUTE
//=====================
router.get("/", (req, res) => {
 Library.find({}, (err, fullLibrary) => {
    if(err){
      res.send(err);
    }else{
      res.render("index.ejs", {
        library: fullLibrary
      });
    }
  });
});

//==========================
//CREATE NEW ROUTE
//==========================
router.post('/', (req, res) => {
 console.log(req.body, 'this is req.body, should be form info')
 if(req.body.read === 'on'){
  req.body.read = true;
 } else{
  req.body.read = false;
 }
 Library.create(req.body, (err, addedLibrary) => {
   if(err){
    console.log(err)
    res.send(err)
   }else{
    console.log(addedLibrary)
    res.redirect('/library')
   }
 });
});

//====================
//NEW ROUTE
//====================
router.get('/id:new', (req, res) => {
 res.render('new.ejs') 
});





module.exports = router;