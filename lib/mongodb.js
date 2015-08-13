//establishes connection to mongodb
var mongo = require('mongodb').MongoClient;

var url = process.env.MONGODB_URL || 'mongodb://localhost:27017/node_tunes';

if(!global.db) {
  mongo.connect(url, function(err, db) {
    global.db = db;
  });
};


