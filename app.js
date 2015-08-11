var fs = require('fs');

//npm dependencies
var express = require('express');


//routes
var routes = require('./routes/index');
var artists = require('./routes/artists');
var albums = require('./routes/albums');


if (process.env.NODE_ENV !== 'production') {
  require('./lib/secrets');
}

require('./lib/mongodb');
