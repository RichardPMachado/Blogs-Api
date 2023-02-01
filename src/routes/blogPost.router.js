const express = require('express');
const { blogPostController } = require('../controllers');
const authorizationUser = require('../middlewares/authorizationUser');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.get('/', authorizationUser, blogPostController.getAllPosts);
router.post('/', authorizationUser, validatePost, blogPostController.createBlogPost);

// router.get('/:id', authorizationUser, userController.getUserById);

module.exports = router;