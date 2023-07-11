const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require('../models/Movie.model');
/* GET home page movies */
router.get('/movies', (req, res, next) => {
    
    Movie.find()
    .then((movies)=>{
        res.render('movies.ejs', {movies})
    })
   
    
    
});
router.get('/movie/:id', (req, res, next) => {
    
    Movie.findById(req.params.id)
    .then((movie)=>{
        res.render('movie-details.ejs', {movie})
    })
   
    
    
});
module.exports = router;