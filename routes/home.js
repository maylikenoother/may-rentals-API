const express = require('express');
const router = express.Router();

//code to generate home page
router.get('/', (req, res) => {
    res.render('index', {title: 'MAY-RENTALS', message: 'Welcome to MayMovieRental'});
});

module.exports = router;