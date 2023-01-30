const express = require('express');
const { blogPostController } = require('../controllers');
const authorizationUser = require('../middlewares/authorizationUser');

const router = express.Router();

router.get('/', authorizationUser, blogPostController.getAllPosts);
// const { userController } = require('../controllers');
// const authorizationUser = require('../middlewares/authorizationUser');
// const { validateUser } = require('../middlewares/validateUser');

// router.get('/', authorizationUser, userController.getAll);
// router.get('/:id', authorizationUser, userController.getUserById);

module.exports = router;