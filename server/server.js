//requires
const express = require('express');
const bodyParser = require('body-parser');

//gobals
const app = express();
const PORT = 5001;
//uses
app.use(express.static('server/public/'));
app.use(bodyParser.urlencoded({ extended : true}));

// spin up server
app.listen( PORT , function(){
    console.log('server is up on port ', PORT);
}) // end server up