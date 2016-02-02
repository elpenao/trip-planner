var express = require('express');
var router = express.Router();
var models = require('../models/');
var Bluebird = require('bluebird');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;


router.get('/', function (req, res, next) {
	Bluebird.all([
		Hotel.find({}),
		Restaurant.find({}),
		Activity.find({})
	])
	.spread(function(hotels, restaurants, activities){
		// render index
		console.log(hotels.toString())
		res.render('index', {
			hotels: hotels,
			restaurants: restaurants,
			activities: activities
		})
	})
})

module.exports = router;