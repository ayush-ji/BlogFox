const express = require('express');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var mongoUrl = 'mongodb+srv://ayush:ayush123@clusterone.9nyzv.mongodb.net/myDB';

var mongoose = require('mongoose');

mongoose.connect(mongoUrl, (err) => {
    console.log(err)
});

const compose_get = require('./routes/blog/get');
const compose_post = require('./routes/blog/post');

// var x  = new mongoose.Schema({
//     name : String
// })

// var newMod = mongoose.model('Name', x);

// var somethingToTest = new newMod({
//     name : 'Ayush'
// });

// somethingToTest.save((err) => {
//     console.log('some + err' + err)
// });

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('screens/home');
})

app.use('/compose', compose_get)
app.use('/compose', compose_post)
app.listen(PORT, () => {
    console.log('SERVER STARTED\nPORT : '+ PORT);
})