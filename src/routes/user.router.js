const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');
const authorizationUser = require('../middlewares/authorizationUser');
const { validateUser } = require('../middlewares/validateUser');

router.get('/', authorizationUser, userController.getAll);
router.post('/', validateUser, userController.createUser);

module.exports = router;