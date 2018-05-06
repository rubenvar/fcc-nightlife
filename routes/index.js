const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
// const userController = require('../controllers/userController');
// const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', appController.renderHome);

router.post('/api/search-results', appController.searchResults);

module.exports = router;