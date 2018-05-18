const mongoose = require('mongoose');
const User = mongoose.model('User'); //import here like this because it is already imported in start.js
const promisify = require('es6-promisify');
const passport = require('passport');

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name').notEmpty();
  req.checkBody('email', 'That Email is not valid').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_exension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be Blank!').notEmpty();
  req.checkBody('password-confirm', 'Confirmed Password cannot be Blank!').notEmpty();
  req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    res.redirect('back');
    return;
  }
  console.log('no errors, validated, registering now')
  next();
};

exports.createUser = async (req, res) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  const registerWithPromise = promisify(User.register, User);
  await registerWithPromise(user, req.body.password);
  console.log('registered');
};

exports.login = passport.authenticate('local', {
  failureRedirect: '/',
  failureFlash: 'Failed Login!'
});