const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');
const authorizationUser = require('../middlewares/authorizationUser');
const { validateUser } = require('../middlewares/validateUser');

router.get('/', authorizationUser, userController.getAll);
router.get('/:id', authorizationUser, userController.getUserById);
router.post('/', validateUser, userController.createUser);
router.delete('/me', authorizationUser, userController.deleteUser);

module.exports = router;