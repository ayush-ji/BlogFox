const express = require('express');
var route = express.Router();
var mongoUrl = 'mongodb+srv://ayush:ayush123@clusterone.9nyzv.mongodb.net/myDB';

const mongoose = require('mongoose');
const Blog = require('../../models/blog');

route.post('/', (req, res) => {
    var blogTitle = req.body.blogTitle;
    var blogSubTitle = req.body.blogSubTitle;
    var blogDescription = req.body.blogText;
    var blogTopic = req.body.blogTopic;

    console.log(blogTopic);

    var newBlog = new Blog(
        {
        title : blogTitle,
        subTitle : blogSubTitle,
        text : blogDescription,
        imgageUrls : [
            {
                url : 'images/1.jpg',
                altText : 'this is some image'
            },
            {
                url : 'images/2.jpg',
            }
        ],
        topic : blogTopic
    }
    )

    console.log(newBlog)

    newBlog.save((err) => {
        console.log('there was some error' + err)
    })

    console.log(blogTitle + blogSubTitle + blogDescription);
    res.redirect('/');
})

module.exports = route;