const express = require('express');
const route = express.Router();

var allTopics = ['crypto', 'linux', 'day-to-day'];

allTopics.forEach((topic) => {

    route.get(`/${topic}`, (req, res) => {
        res.render('screens/topic', {topic : topic});
    })

})

module.exports = route;
