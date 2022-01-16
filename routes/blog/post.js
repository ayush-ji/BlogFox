const express = require('express');

var route = express.Router();

route.post('/', (req, res) => {
    var blogTitle = req.body.blogTitle;
    var blogSubTitle = req.body.blogSubTitle;
    var blogDescription = req.body.blogText;

    console.log(blogTitle + blogSubTitle + blogDescription);
    res.redirect('/');
})

module.exports = route;