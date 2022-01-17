const express = require('express');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var mongoUrl = 'mongodb+srv://ayush:ayush123@clusterone.9nyzv.mongodb.net/myDB';

var mongoose = require('mongoose');

mongoose.connect(mongoUrl, (err) => {
    console.log(err)
});

const homeRoute = require('./routes/home/get');
const composeGet = require('./routes/blog/get');
const composePost = require('./routes/blog/post');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.use('/', homeRoute);
app.use('/compose', composeGet)
app.use('/compose', composePost)

app.listen(PORT, () => {
    console.log('SERVER STARTED\nPORT : '+ PORT);
});