const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');
const { validateUser } = require('../middlewares/validateUser');

router.post('/', validateUser, userController.createUser);

module.exports = router;