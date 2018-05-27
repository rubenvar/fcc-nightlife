const axios = require('axios');
const mongoose = require('mongoose');
const User = mongoose.model('User'); //import here like this because it is already imported in start.js

exports.renderHome = (req, res) => {
  res.render('homepage');
}

exports.getSearchResults = (req, res, next) => {
  // gets the searched word
  const location = req.query.location;
  const uri = 'https://api.yelp.com/v3/businesses/search?limit=10&categories=bars&location=' + location;
  const token = process.env.YELP_KEY;
  axios
    // connects to api
    .get(uri, { headers: { "Authorization": `Bearer ${token}` } })
    .then(response => {
      res.locals.apiResponse = response.data;
      next();
    })
    .catch(error => {
      console.log(error);
      req.flash('error', 'An error occurred...');
      res.redirect('/');
    });
  // res.locals.apiResponse = allTheData;
  // next();
}

exports.countAssistance = async (req, res, next) => {
  // map through the array of objects (places) and count the users that have the place id in their db document
  await Promise.all(res.locals.apiResponse.businesses.map(async place => {
    const id = place.id;
    const count = await User.count({ places: id });
    place["users_going"] = count;
  }));
  // when all of the return, keep going (Promise.all)
  next();
}

exports.renderResults = (req, res) => {
  res.render('results', {
    title: `${req.query.location}`,
    places: res.locals.apiResponse.businesses,
    total: res.locals.apiResponse.total
  });
}

exports.storePlace = async (req, res) => {
  // if no user, the client side js already shows login form, but just in case
  if (!req.user) {
    console.log('not logged user');
    return;
  }
  // get the user's places and string them
  const places = req.user.places.map(place => place.toString());
  const operator = places.includes(req.params.id) ? '$pull' : '$push';
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { [operator]: { places: req.params.id } },
    { new: true }
  );
  res.json(user);
};