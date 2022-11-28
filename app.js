require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var PORT = process.env.PORT || 3000;
var mongoUrl = 'mongodb+srv://ayush:<password>@clusterone.9nyzv.mongodb.net/myDB'; //add password here

var mongoose = require('mongoose');

var x = mongoose.connect(mongoUrl, (err) => {
    console.log(err)
    console.log(process.env.USER_NAME)
})

//Importing all Router
const homeGetRoute = require('./routes/home/get');
const topicGetRoute = require('./routes/topics/get');
const aboutGetRoute = require('./routes/about/get');
const aboutPostRoute = require('./routes/about/post');
const composeGet = require('./routes/blog/get');
const composePost = require('./routes/blog/post');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

// Using all the imported router and assigning them to custom path
app.use('/', homeGetRoute);
app.use('/topics', topicGetRoute);
app.use('/about', aboutGetRoute);
app.use('/about', aboutPostRoute);
app.use('/compose', composeGet);
app.use('/compose', composePost);

// 404! response 
app.use(function (req, res, next) {
      res.status(404).render("screens/404")
    })

app.listen(PORT, () => {
    console.log('server started!\nPORT : '+ PORT);
});
