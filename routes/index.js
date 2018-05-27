const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', appController.renderHome);

router.get('/search-results',
  appController.getSearchResults,
  catchErrors(appController.countAssistance),
  appController.renderResults
);

router.get('/user/:userid', catchErrors(appController.getUserById), catchErrors(appController.renderUser));

router.post('/register',
  userController.validateRegister,
  catchErrors(userController.createUser),
  userController.login
);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.post('/going-tonight/:id', catchErrors(appController.storePlace));

module.exports = router;