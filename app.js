var fs = require('fs');

//npm dependencies
var bodyParser = require('body-parser');
var express = require('express');
var lessCSS = require('less-middleware');
var morgan = require('morgan');

//routes required
var index = require('./routes/index');
var albums = require('./routes/albums');
var artists = require('./routes/artists');


var app = express();

//detects the environment and configures the app accordingly
if (process.env.NODE_ENV !== 'production') {
  require('./lib/secrets');
}

//requires the database
require('./lib/mongodb');

//sets express
app.set('view engine', 'ejs');

//Once set, the value of app.locals properties persist throughout the life of the app
app.locals.title = 'Node-Tunes';
app.use(bodyParser.urlencoded({extended: true}));

//handle any request that ends in /routeName
app.use('/', index);
app.use('/albums', albums)
app.use('artists', artists)

//put error handling at the end
app.use(function (req, res) {
  res.status(403);
  res.send('You are unauthorized!');
});
//order is important, 400s before the 500s
app.use(function (err, req, res, next) {
  //pass 4 args to create error handling middleware
  console.log('OH MY! THERE WAS AN ERROR', err.stack);
  res.status(500).send('Sorry folks!');
});

//establishes the node server connection
var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log(process.env);
  console.log('Example app listening at http://%s:%d', host, port);
});


