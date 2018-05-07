
const axios = require('axios');

exports.renderHome = (req, res) => {
  res.render('homepage');
}

exports.searchResults = (req, res) => {
  // gets the searched word
  const location = req.body.location;
  const uri = 'https://api.yelp.com/v3/businesses/search?limit=10&categories=bars&location=' + location;
  const token = process.env.YELP_KEY;
  axios
    // connects to api
    .get(uri, { headers: { "Authorization": `Bearer ${token}` } })
    // and maybe axios them in a div below the homepage form and make the form dissapear
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  // and add a button 'new search' that hides the div and shows the form again
}