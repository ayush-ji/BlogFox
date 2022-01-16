const express = require('express');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('screens/home');
})

app.listen(PORT, () => {
    console.log('SERVER STARTED\nPORT : '+ PORT);
})