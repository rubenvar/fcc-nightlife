const axios = require('axios');
const mongoose = require('mongoose');
const User = mongoose.model('User'); //import here like this because it is already imported in start.js

exports.renderHome = (req, res) => {
  res.render('homepage');
}

exports.getSearchResults = (req, res, next) => {
  // gets the searched word
  const location = req.body.location;
  const uri = 'https://api.yelp.com/v3/businesses/search?limit=2&categories=bars&location=' + location;
  const token = process.env.YELP_KEY;
  axios
    // connects to api
    .get(uri, { headers: { "Authorization": `Bearer ${token}` } })
    // and maybe axios them in a div below the homepage form and make the form dissapear
    .then(response => {
      console.log(response.data);
      res.locals.apiResponse = response.data;
      next();
    })
    .catch(error => {
      console.log(error);
    });
  // and add a button 'new search' that hides the div and shows the form again
}

exports.renderResults = (req, res) => {
  res.render('results', { title: `Nightlife in ${req.body.location}`,places: res.locals.apiResponse.businesses, total: res.locals.apiResponse.total });
}

exports.storePlace = async (req, res) => {
  console.log('storing place id: ' + req.params.id + ' in the user with id: ' + req.user._id);
  if (!req.user) {
    console.log('not logged user');
    return;
  }
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { places: req.params.id } },
    { new: true }
  );
  res.json(user);
};