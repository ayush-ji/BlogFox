const express = require('express');

var route = express.Router();

route.get('/', (req, res) => {
    res.render('screens/compose');
})

module.exports = route;