const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 8080
var app = express();
app
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
.get('/', function (req, res) {
         res.render("login")  
})
.listen(PORT, () => console.log(`Listening on ${PORT}`));
