const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 8080
var app = express();
app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

.get('/', function (req, res) {
         res.render("login")  
})
