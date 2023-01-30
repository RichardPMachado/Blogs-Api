const express = require('express');
const { userController } = require('../controllers');
const { validateLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, userController.createUser);

module.exports = router;