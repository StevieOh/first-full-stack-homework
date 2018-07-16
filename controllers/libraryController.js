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
 if(req.body.currentlyReading === 'on'){
  req.body.currentlyReading = true;
 } else{
  req.body.currentlyReading = false;
 }
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
router.get('/new', (req, res) => {
 res.render('new.ejs') 
});

router.get('/:id/edit', (req, res) => {
 Library.findById(req.params.id, (err, foundLibrary) => {
  res.render('edit.ejs', {
    library: foundLibrary,
    index: req.params.index
  })
 }) 
})

//=====================
//EDIT ROUTE
//=====================
router.get('/:index/edit', (req, res) => {
 console.log('hitting edit route')
 res.render('edit.ejs', {
  library: foundLibrary
 }) 
})
//=====================
//SHOW ROUTE
//=====================
router.get('/:index', (req, res) => {
 res.render('show.ejs', {
  library: Library[req.params.index]
 }) 
})
//=====================
//UPDATE ROUTE
//=====================
router.put('/:id', (req, res) => {
 console.log('hitting the put route')
 if(req.body.currentlyReading === 'on'){
  req.body.currentlyReading = true;
 } else{
  req.body.currentlyReading = false;
 }
 if (req.body.read === 'on') {
  req.body.read = true;
 }else{
  req.body.read = false;
 }
 Library.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLibrary) => {
   if(err){
    res.send(err);
   }else{
    console.log(updatedLibrary, 'check your model')
    res.redirect('/library')
   }
 })
});
//====================
//DELETE ROUTE
//====================
router.delete('/:id', (req, res) => {
 Library.findByIdAndRemove(req.params.id, (err, removedLibrary) => {
   if(err){
    console.log(err, 'this is the error in the delete route');
    res.redirect('/library')
   }
 }) 
})

module.exports = router;