const express = require('express');
const route = express.Router();

var Blog = require('../../models/blog');

var allTopics = ['crypto', 'linux', 'day-to-day', 'others'];
var foundBlogs = [];

allTopics.forEach((topic) => {

    route.get(`/${topic}`, (req, res) => {

        Blog.find({topic : topic}, (err, docs) => {
            if(err) throw err;
            else {
                foundBlogs = docs;
                console.log(foundBlogs)
            }
        });

  //      console.log(foundBlogs);

        res.render('screens/topic', {topic : topic, allBlogs : foundBlogs});
    })

})

module.exports = route;
