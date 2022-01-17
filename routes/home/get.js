const express = require('express');

const route = express.Router();

var cardDataArr = [
    {
        imgSrc : 'images/2.jpg',
        cardTitle : 'hello',
        cardText : 'hello from me',
        cardLink : '#'
    },
    {
        imgSrc : 'images/1.jpg',
        cardTitle : 'gtr',
        cardText : 'hello from gtr',
        cardLink : '#'
    }
]

route.get('/', (req, res) => {
    res.render('screens/home', {cardDataArr : cardDataArr});
});

module.exports = route;
