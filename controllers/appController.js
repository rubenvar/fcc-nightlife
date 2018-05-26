const axios = require('axios');
const mongoose = require('mongoose');
const User = mongoose.model('User'); //import here like this because it is already imported in start.js

exports.renderHome = (req, res) => {
  res.render('homepage');
}

exports.getSearchResults = (req, res, next) => {
  // gets the searched word
  const location = req.query.location; // maybe try to get it first from the locals?
  const uri = 'https://api.yelp.com/v3/businesses/search?limit=10&categories=bars&location=' + location;
  const token = process.env.YELP_KEY;
  axios
    // connects to api
    .get(uri, { headers: { "Authorization": `Bearer ${token}` } })
    .then(response => {
      console.log(response.data);
      res.locals.apiResponse = response.data;
      next();
    })
    .catch(error => {
      console.log(error);
      req.flash('error', 'An error occurred...');
      res.redirect('/');
    });
}

exports.countAssistance = (req, res, next) => {
  console.log('casa');
  next();
}

exports.renderResults = (req, res) => {
  res.render('results', {
    title: `Nightlife in ${req.query.location}`,
    places: res.locals.apiResponse.businesses,
    total: res.locals.apiResponse.total
  });
}

exports.storePlace = async (req, res) => {
  console.log('storing place id: ' + req.params.id + ' in the user with id: ' + req.user._id);
  if (!req.user) {
    console.log('not logged user');
    return;
  }
  const places = req.user.places.map(place => place.toString());
  const op = places.includes(req.params.id) ? '$pull' : '$push';
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { [op]: { places: req.params.id } },
    { new: true }
  );
  res.json(user);
};