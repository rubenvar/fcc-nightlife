exports.renderHome = (req, res) => {
  res.render('homepage');
}

exports.searchResults = (req, res) => {
  // gets the searched word
  res.json(req.body.location);
  // needs to connect to api and get results 
  // and maybe axios them in a div below the homepage form and make the form dissapear
  // and add a button 'new search' that hides the div and shows the form again
}