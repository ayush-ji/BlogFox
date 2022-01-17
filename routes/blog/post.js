const express = require('express');
var route = express.Router();
var mongoUrl = 'mongodb+srv://ayush:ayush123@clusterone.9nyzv.mongodb.net/myDB';

const mongoose = require('mongoose');

// mongoose.connect(mongoUrl, (e, err) => {
//     console.log('failed to connect'+ e + err);
// })

const Blog = require('../../models/blog');

route.post('/', (req, res) => {
    var blogTitle = req.body.blogTitle;
    var blogSubTitle = req.body.blogSubTitle;
    var blogDescription = req.body.blogText;

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