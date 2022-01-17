const express = require('express');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var mongoUrl = 'mongodb+srv://ayush:ayush123@clusterone.9nyzv.mongodb.net/myDB';

var mongoose = require('mongoose');

mongoose.connect(mongoUrl, (err) => {
    console.log(err)
});

const homeGetRoute = require('./routes/home/get');
const topicGetRoute = require('./routes/topics/get')
const composeGet = require('./routes/blog/get');
const composePost = require('./routes/blog/post');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.use('/', homeGetRoute);
app.use('/topics', topicGetRoute);
app.use('/compose', composeGet);
app.use('/compose', composePost);

app.use(function (req, res, next) {
      res.status(404).render("screens/404")
    })

app.listen(PORT, () => {
    console.log('SERVER STARTED\nPORT : '+ PORT);
});