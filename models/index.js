var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tripplanner')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

module.exports = {
  Hotel: require('./hotel'),
  Activity: require('./activity'),
  Restaurant: require('./restaurant'),
  Place: require('./place')
};