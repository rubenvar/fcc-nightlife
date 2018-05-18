const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const userController = require('../controllers/userController');
// const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', appController.renderHome);

router.post('/search-results', appController.getSearchResults, appController.renderResults);

router.post('/register',
  userController.validateRegister,
  catchErrors(userController.createUser)
);

router.post('/login', userController.login);

router.post('/going-tonight/:id', catchErrors(appController.storePlace));

module.exports = router;


// router.post('/register',
//     userController.validateRegister,
//     userController.register,
//     authController.login
// );