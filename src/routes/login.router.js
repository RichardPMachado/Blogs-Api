const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares/validateLogin');

router.post('/', validateLogin, loginController.createLogin);

module.exports = router;