const express = require('express');
const route = express.Router();

var Blog = require('../../models/blog');

var allTopics = ['crypto', 'linux', 'day-to-day', 'others'];
var foundBlogs = [];

// create get route for allTopics listed by running forEach loop on each item

allTopics.forEach((topic) => {

    route.get(`/${topic}`, (req, res) => {

        // this method will find all blogs related to specific topic and store them in
        // foundBlogs Array above
        
        Blog.find({topic : topic}, (err, docs) => {
            if(err) throw err;
            else {
                foundBlogs = docs;
                console.log(foundBlogs)
            }
        });

        res.render('screens/topic', {topic : topic, allBlogs : foundBlogs});
    })

})

module.exports = route;
