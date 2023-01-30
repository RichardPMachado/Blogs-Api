const express = require('express');
const { userController } = require('../controllers');
const { validateUser } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/', validateUser, userController.createUser);

module.exports = router;