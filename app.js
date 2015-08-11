var fs = require('fs');

//npm dependencies
var express = require('express');
var lessCSS = require('less-middleware');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//routes required
var routes = require('./routes/index');
var artists = require('./routes/artists');
var albums = require('./routes/albums');


//A
if (process.env.NODE_ENV !== 'production') {
  require('./lib/secrets');
}


require('./lib/mongodb');

//settings to express
app.set('view engine', 'ejs');
app.set('case sensitive routing', true); //just what it says
//global variable; all of the templates have access to it
app.locals.title = 'aweso.me';
app.use(lessCSS('public'));
