const express = require('express');
const db = require('../module/db');
const router = express.Router();



/* Get home page. */
router.get('/', function(req, res, next) {
     res.render('index', {
          locals: {
                    
          }, 
          partials: {
               partial: '/partials/home'
          }
     });

}),


router.post('/', function(req, res, next) {
     res.send('Post request from home page');
})

module.exports = router;